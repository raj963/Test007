import React, { useState } from 'react';
import './SearchPage.css'; // Make sure to create a corresponding CSS file

const SearchPage = () => {
  const [isHeader, setIsHeader] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    setIsHeader(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className={`search-page ${isHeader ? 'header-mode' : ''}`}>
      <div className="logo">Star</div>
      <div className={`search-container ${isHeader ? 'header-mode' : ''}`}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          className="search-button"
          onClick={handleSearchClick}
          disabled={!searchText.trim()}
        >
          Incident Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
