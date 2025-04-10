// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WidgetList from './components/WidgetList';
import WidgetDetail from './components/WidgetDetail';
import widgetsData from './data/widgets'; // Import the data
import './App.css'; // Optional: global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<WidgetList widgets={widgetsData} />}
            />
            <Route
              path="/widget/:id" // Route parameter for widget ID
              element={<WidgetDetail widgets={widgetsData} />}
            />
            {/* Optional: Add a catch-all route for 404 */}
            {/* <Route path="*" element={<h2>Page Not Found</h2>} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;