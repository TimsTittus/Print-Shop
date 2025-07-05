import React from 'react';
import './PrintForm.css';
import { useNavigate } from 'react-router-dom';


const PrintForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you would validate and send data here
    navigate('/payment'); // 👈 navigate to payment page
  };

  return (
    <section className="print-form">
      <h3>Start a New Print Job</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" />
        <input type="file" />
        <input type="text" placeholder="Color" />
        <input type="number" placeholder="Number of Prints" />
        <input type="text" placeholder="Payment Preference" />
        <button type="submit">Submit Print Job</button>
      </form>
    </section>
  );
};

export default PrintForm;
