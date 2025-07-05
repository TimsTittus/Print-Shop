//For Recent Print History in Home Page
import React from 'react';
import './PrintHistory.css';

const PrintHistory: React.FC = () => {
  return (
    <section className="print-history">
      <h3>Recent Print History</h3>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Color</th>
            <th>Prints</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Document1.pdf</td>
            <td>B/W</td>
            <td>2</td>
            <td><span className="badge completed">Completed</span></td>
            <td>2024-01-15</td>
          </tr>
          <tr>
            <td>Presentation.pptx</td>
            <td>Color</td>
            <td>5</td>
            <td><span className="badge in-progress">In Progress</span></td>
            <td>2024-01-16</td>
          </tr>
          <tr>
            <td>Essay.docx</td>
            <td>B/W</td>
            <td>3</td>
            <td><span className="badge pending">Pending</span></td>
            <td>2024-01-17</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PrintHistory;