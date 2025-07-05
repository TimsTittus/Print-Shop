import React from 'react';
import Navbar from './components/Navbar';
import PrintForm from './components/PrintForm';
import PrintHistory from './components/PrintHistory';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <PrintForm />
        <PrintHistory />
      </main>
    </div>
  );
};

export default App;
