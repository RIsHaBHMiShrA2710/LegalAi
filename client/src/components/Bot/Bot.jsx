import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './Bot.css';
import { useAuth } from '../context/AuthContext';
function Bot() {
  const { user, logout } = useAuth(); 
  const [userInput, setUserInput] = useState('');
  const [fetchedMessages, setFetchedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    
    const fetchMessages = async () => {
      try {
        if(!user) return;
        const authToken = `${JSON.parse(localStorage.getItem('user')).token}`;
        const response = await axios.get(`https://samvidhanai-1ogw.onrender.com/get-messages`, {
          headers: {
            Authorization: authToken,
          },
        });
        if(response.status === 200){
          console.log(response.data);
          setFetchedMessages(response.data.reverse());
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
        if (error.response && error.response.status === 401) {
          alert('Your session has expired. Please log in again.');
          logout();
        }
      }
    };
  useEffect(() => {
    fetchMessages();
  }, [user]);


  const sendMessage = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') {
      return;
    }
    setIsLoading(true);
    try {
      const authToken = `${user.token}`;
      const response = await axios.post('https://samvidhanai-1ogw.onrender.com/generate-response', { inputText: userInput },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      if(response.status === 200){
        const newHistoryItem = {
          query: userInput,
          response: response.data.response, // Assuming this is how you receive the bot's response
        };
        setFetchedMessages(prevMessages => [newHistoryItem, ...prevMessages]);
      }
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setIsLoading(false);
      setUserInput('');
    }
    window.location.reload();
};


  const handleDeleteMessages = async () => {
    setIsLoadingDelete(true);
    try {
      const authToken = `${user.token}`;
      await axios.delete('https://samvidhanai-1ogw.onrender.com/delete-response', {
        headers: {
          Authorization: authToken,
        },
      });
      setFetchedMessages([]);
    
    } catch (error) {
      console.error('Error deleting messages:', error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return (
    <div className="bot_container">
      <div className="national_emblem">
        <img src="/images/image1.png" alt="national emblem" className="national_emblem_image" />
      </div>
      <div className="chat-box">
        <div className="bot_input-container">
          <button className={`message_delete_icon ${isLoadingDelete ? 'delete-mode' : ''}`} onClick={handleDeleteMessages} disabled={isLoadingDelete}>
            {isLoadingDelete ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : <FaTrash />}
          </button>
          <input className="bot_input" type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder="Type your message..." />
          <button className={`bot_send_button ${isLoading ? 'loading-button' : ''}`} onClick={sendMessage} disabled={isLoading} type="button">
            {isLoading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : 'Send'}
          </button>
        </div>
        <div className="messages">
          {fetchedMessages.map((message, index) => (
            <div key={message._id} className="message">
              <p className="user-message">{message.title}</p>
              <p className="bot-message">{message.content}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Bot;
