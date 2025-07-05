import React from 'react';
import './PaymentPage.css';

const PaymentPage: React.FC = () => {
  return (
    <div className="payment-page">
      <h2>Secure Payment</h2>
      <p>Your print job is ready for payment. Please review the details below and proceed to pay securely.</p>

      <div className="order-summary">
        <h4>Order Summary</h4>
        <div className="summary-grid">
          <div>
            <p>File Name</p>
            <strong>Document.pdf</strong>
          </div>
          <div>
            <p>Color</p>
            <strong>Color</strong>
          </div>
          <div>
            <p>Number of Prints</p>
            <strong>5</strong>
          </div>
          <div>
            <p>Total Amount</p>
            <strong>$2.50</strong>
          </div>
        </div>
      </div>

      <div className="payment-methods">
        <h4>Payment Method</h4>
        <div className="buttons">
          <button>Credit Card</button>
          <button>Debit Card</button>
          <button>PayPal</button>
        </div>

        <form>
          <input type="text" placeholder="Card Number" />
          <div className="row">
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
          </div>
          <input type="text" placeholder="Name on Card" />
          <button type="submit" className="pay-btn">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
