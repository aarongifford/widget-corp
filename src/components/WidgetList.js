// src/components/WidgetList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WidgetList.css'; // Optional: for styling

function WidgetList({ widgets }) {
  if (!widgets || widgets.length === 0) {
    return <p>No widgets available.</p>;
  }

  return (
    <div className="widget-list-container">
      <h2>Our Widgets</h2>
      <ul className="widget-list">
        {widgets.map((widget) => (
          <li key={widget.id} className="widget-list-item">
            <Link to={`/widget/${widget.id}`}>
              <span className="widget-name">{widget.name}</span>
              <span className="widget-price">${widget.price.toFixed(2)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetList;