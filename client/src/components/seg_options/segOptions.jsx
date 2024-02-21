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
        Home
      </button>
      <button
        className={`segmented-option ${activeSegment === '/pdf' ? 'active' : ''}`}
        onClick={() => handleNavigation('/pdf')}
      >
        PDF
      </button>
      <button
        className={`segmented-option ${activeSegment === '/findlawyer' ? 'active' : ''}`}
        onClick={() => handleNavigation('/findlawyer')}
      >
        Find Lawyer
      </button>
    </div>
  );
}

export default SegOptions;
