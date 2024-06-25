import React, { useState } from 'react';
import './SearchPage.css'; // Make sure to create a corresponding CSS file

const SearchPage = () => {
  const [isHeader, setIsHeader] = useState(false);

  const handleSearchClick = () => {
    setIsHeader(true);
  };

  return (
    <div className={`search-page ${isHeader ? 'header-mode' : ''}`}>
      <div className="logo">Star</div>
      <div className={`search-container ${isHeader ? 'header-mode' : ''}`}>
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="search-button" onClick={handleSearchClick}>
          Incident Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
