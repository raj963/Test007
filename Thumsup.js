import React, { useState } from 'react';

const ThumbsComponent = () => {
  const [thumbsUpHover, setThumbsUpHover] = useState(false);
  const [thumbsDownHover, setThumbsDownHover] = useState(false);

  const handleThumbsUpMouseEnter = () => setThumbsUpHover(true);
  const handleThumbsUpMouseLeave = () => setThumbsUpHover(false);

  const handleThumbsDownMouseEnter = () => setThumbsDownHover(true);
  const handleThumbsDownMouseLeave = () => setThumbsDownHover(false);

  return (
    <div style={{ display: 'flex', gap: '10px', fontSize: '24px' }}>
      <div
        onMouseEnter={handleThumbsUpMouseEnter}
        onMouseLeave={handleThumbsUpMouseLeave}
        style={{ cursor: 'pointer', color: thumbsUpHover ? 'green' : 'black' }}
      >
        👍
      </div>
      <div
        onMouseEnter={handleThumbsDownMouseEnter}
        onMouseLeave={handleThumbsDownMouseLeave}
        style={{ cursor: 'pointer', color: thumbsDownHover ? 'red' : 'black' }}
      >
        👎
      </div>
    </div>
  );
};

export default ThumbsComponent;
