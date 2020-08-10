import React from 'react';
import heart from './like.png';

const heartStyles = {
  heart: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    position: 'absolute',
    top: '80%',
    right: '5%',
    color: 'pink',
    display: 'inline-block',
    textAlign: 'center',
    padding: '0rem',
    outline: 'none',
  },
};

const HeartClicker = () => {
  const handleClick = () => {};
  return (
    <>
      <button onClick={handleClick} style={heartStyles.heart}>
        <img src={heart} style={{ margin: '0rem', width: '5vw' }} />
      </button>
    </>
  );
};

export default HeartClicker;
