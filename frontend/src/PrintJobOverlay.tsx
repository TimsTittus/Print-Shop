import React from 'react';
import './PrintJobOverlay.css';

interface Props {
  onClose: () => void;
}

const PrintJobOverlay: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Print Job Submitted!</h2>
        <p>Your request has been received. We'll notify you once it's ready.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PrintJobOverlay;
