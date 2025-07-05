import React from 'react';
import './MainLanding.css';
import { useNavigate } from 'react-router-dom';

const MainLanding: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="landing-container">
      <div className="landing-left">
        <img src="/mainpageimage.png" alt="Printing Illustration" className="landing-image" />
      </div>
      <div className="landing-right">
        <h1>Fast, Affordable & High-Quality Printing</h1>
        <p>
          From color copies to bulk prints<br />
          <strong>– Get it done fast with PrintHub.</strong>
        </p>
        <button className="print-now-button" onClick={handleClick}>
          Print Now
        </button>
      </div>
    </div>
  );
};

export default MainLanding;
