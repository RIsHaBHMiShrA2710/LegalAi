const User = require('../models/user'); // Adjust path as needed
const openAi = require('../config/openaiConfig');

async function generateResponseFromOpenAI(inputText) {
    try {
        const response = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo', 
            messages: [{ role: 'system', content: 'You are a legal advisor bot for indian laws.' }, { role: 'user', content: inputText }],
            max_tokens: 400,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error generating response:', error.message);
        throw new Error('An error occurred while generating the response.');
    }
}
exports.generateResponse = async (req, res) => {
    const user = req.user;
    const userId = user.userId;
    const inputText = req.body.inputText;
    let inputPrompt = inputText + " Give the response of the said query as a legal advisor bot (for India). If you think that the query is serious, tell them to find contact to a lawyer from the find lawyer option. The answer should be strictly under 150 words";
   
    try {
        
        const usero = await User.findById(userId);

        if (!usero) {
            console.log(userId+": not user");
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(userId);
        const openaiResponse = await generateResponseFromOpenAI(inputText);
        
        // Find the user by ID and update their history
        const newQuery = {
            title: inputText,
            content: openaiResponse
        }
        console.log(newQuery);
        usero.history.push(newQuery)
        await usero.save();
        res.json({ response: openaiResponse });
    } catch (error) {
        console.error('Error generating response:', error.message);
        res.status(500).json({ error: 'An error occurred while generating the response.' });
    }
};

// Delete all messages
exports.deleteResponse = async (req, res) => {
    const user = req.user; // The ID of the user
    const userId = user.userId;
    try {
        // Find the user by ID and set their history to an empty array
        const updatedUser = await User.findByIdAndUpdate(userId, {
            $set: {
                history: []
            }
        }, { new: true }); 
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.json({ message: 'History deleted successfully.' });
    } catch (error) {
        console.error('Error deleting history:', error.message);
        res.status(500).json({ error: 'An error occurred while deleting the history.' });
    }
};

// Get all messages
exports.getMessages = async (req, res) => {
    const user = req.user;
    const userId = user.userId; 

    try {
        const usero = await User.findById(userId); // Select only the history field, exclude the _id field
        console.log("right upto here");
        if (!usero) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const userHistory = usero.history;
        res.status(200).json(userHistory);
    } catch (error) {
        console.error('Error fetching user history:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching the user history.' });
    }
};
