import React from 'react';
import { Routes, Route } from 'react-router-dom'; // For Page Routing
import Navbar from './components/Navbar'; // Navigation Bar
import MainLanding from './components/MainLanding'; // New Landing Page
import PrintForm from './components/PrintForm'; // Home Page - Start New Job
import PrintHistory from './components/PrintHistory'; // Home Page - Print History
import PaymentPage from './components/Paymentpage'; // Payment Page
import UploadedFiles from './components/UploadedFiles'; // History Page
import ServicesPricing from './components/ServicesPricing'; // Services Page
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* 🏠 Landing Page */}
          <Route path="/" element={<MainLanding />} />

          {/* 📄 Dashboard: New Job + History */}
          <Route
            path="/dashboard"
            element={
              <>
                <PrintForm />
                <PrintHistory />
              </>
            }
          />

          {/* 🧾 Services */}
          <Route path="/services" element={<ServicesPricing />} />

          {/* 📂 History */}
          <Route path="/history" element={<UploadedFiles />} />

          {/* 💳 Payment */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
