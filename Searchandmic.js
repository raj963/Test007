import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const SearchBoxComponent = () => {
  const searchBoxStyle = {
    position: 'relative',
    width: '300px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 40px 10px 10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const searchIconStyle = {
    ...iconStyle,
    left: '10px',
  };

  const micIconStyle = {
    ...iconStyle,
    right: '10px',
  };

  return (
    <div style={searchBoxStyle}>
      <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
      <input type="text" placeholder="Search" style={inputStyle} />
      <FontAwesomeIcon icon={faMicrophone} style={micIconStyle} />
    </div>
  );
};

export default SearchBoxComponent;
