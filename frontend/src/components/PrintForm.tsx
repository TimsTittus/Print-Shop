import React from 'react';
import './PrintForm.css';

const PrintForm: React.FC = () => {
  return (
    <section className="print-form">
      <h3>Start a New Print Job</h3>
      <form>
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