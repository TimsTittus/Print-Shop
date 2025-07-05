import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2>Print Shop</h2>
      <p className="subtitle">Student Portal</p>
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>Print History</li>
          <li>Announcements</li>
          <li>Help</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;