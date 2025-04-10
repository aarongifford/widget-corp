// src/components/WidgetDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './WidgetDetail.css'; // Optional: for styling

function WidgetDetail({ widgets }) {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const widgetId = parseInt(id, 10); // Ensure ID is a number

  // Find the widget by ID
  // In a real app, you might fetch this data instead
  const widget = widgets.find(w => w.id === widgetId);

  if (!widget) {
    return (
      <div className="widget-detail-container">
        <h2>Widget Not Found</h2>
        <Link to="/" className="back-button">Back to List</Link>
      </div>
    );
  }

  return (
    <div className="widget-detail-container">
      <h2>{widget.name} Details</h2>
      <div className="detail-grid">
        <div className="detail-label">Name:</div>
        <div className="detail-value">{widget.name}</div>

        <div className="detail-label">Description:</div>
        <div className="detail-value">{widget.description}</div>

        <div className="detail-label">Price:</div>
        <div className="detail-value">${widget.price.toFixed(2)}</div>

        {/* Add other fields here if they exist */}

      </div>
      <Link to="/" className="back-button">
        &larr; Back to List
      </Link>
    </div>
  );
}

export default WidgetDetail;