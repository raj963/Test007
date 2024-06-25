import React from 'react';
import './SearchPage.css'; // Make sure to create a corresponding CSS file

const SearchPage = () => {
  return (
    <div className="search-page">
      <div className="logo">Star</div>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="search-button">Incident Search</button>
      </div>
    </div>
  );
};

export default SearchPage;
