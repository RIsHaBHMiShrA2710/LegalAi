import React, { useState } from 'react';
import './segOptions.css';
import { useNavigate } from 'react-router-dom';

function SegOptions() {
  const navigate = useNavigate();
  const [activeSegment, setActiveSegment] = useState('/');

  const handleNavigation = (path) => {
    navigate(path);
    setActiveSegment(path);
  };

  return (
    <div className="segmented-controls">
      <button
        className={`segmented-option ${activeSegment === '/' ? 'active' : ''}`}
        onClick={() => handleNavigation('/')}
      >
        BOT
      </button>
      <button
        className={`segmented-option ${activeSegment === '/pdf' ? 'active' : ''}`}
        onClick={() => handleNavigation('/pdf')}
      >
        DOCs
      </button>
      <button
        className={`segmented-option ${activeSegment === '/findlawyer' ? 'active' : ''}`}
        onClick={() => handleNavigation('/findlawyer')}
      >
        LAWYERS
      </button>
    </div>
  );
}

export default SegOptions;
