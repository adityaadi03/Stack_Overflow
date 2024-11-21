import React from "react";
import Sidebar from "./components/Sidebar";
import QuestionList from "./components/QuestionList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Your Answers Here..."
          />
        </header>
        <div className="content">
          <QuestionList />
          <aside className="sidebar-meta">
            <div className="blog-section">
              <h3>The Overflow Blog</h3>
              <p>The unexpected benefits of mentoring others</p>
              <p>Podcast 354: Building for AR with Niantic Labs</p>
            </div>
            <div className="meta-section">
              <h3>Featured & Meta</h3>
              <p>Beta release of Collectives™ on Stack Overflow</p>
            </div>
            <div className="meta-section">
              <h3>Hot meta post</h3>
              <p>Tags (driver) and (device-driver) appear redundant</p>
              <p>
                How to handle duplicates where one answer is accepted but both
                questions...
              </p>
            </div>
            <div className="filter-section">
              <button className="add-filter-button">Add Custom Filters</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
