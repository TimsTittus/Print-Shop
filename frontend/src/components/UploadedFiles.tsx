import React from 'react';
import './UploadedFiles.css';

const files = [
  { filename: 'Contract.pdf', orderId: '12345' },
  { filename: 'Brochure.pdf', orderId: '12346' },
  { filename: 'Flyer.pdf', orderId: '12347' },
  { filename: 'Report.pdf', orderId: '12348' },
  { filename: 'Presentation.pdf', orderId: '12349' },
];

const UploadedFiles: React.FC = () => {
  return (
    <div className="uploaded-files">
      <h2>Uploaded Files</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Preview</th>
              <th>Filename</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>
                  <img src="/file.png" alt="preview" className="file-icon" />
                </td>
                <td>{file.filename}</td>
                <td><a href="#">Order #{file.orderId}</a></td>
                <td className="actions">
                  <a href="#">Download</a> | <a href="#">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadedFiles;
