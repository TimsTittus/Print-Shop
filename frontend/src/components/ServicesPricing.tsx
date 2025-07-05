import React from 'react';
import './ServicesPricing.css';

const services = [
  { name: 'Standard Printing', rate: '$0.10 per page', status: 'Active' },
  { name: 'Premium Printing', rate: '$0.25 per page', status: 'Active' },
  { name: 'Binding', rate: '$2.00 per document', status: 'Active' },
  { name: 'Scanning', rate: '$0.05 per page', status: 'Inactive' },
  { name: 'Delivery', rate: '$5.00 per order', status: 'Active' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-container">
      <h1>Services and Pricing</h1>
      <p className="description">Manage your service offerings and pricing details.</p>
      <table className="services-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Rate</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.rate}</td>
              <td>
                <span
                  className={`status-badge ${service.status === 'Active' ? 'active' : 'inactive'}`}
                >
                  {service.status}
                </span>
              </td>
              <td><a href="#">Edit</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesPage;
