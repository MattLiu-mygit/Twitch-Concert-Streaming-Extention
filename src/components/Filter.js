import React from 'react';
import pepelaugh from './pepelaugh.jpg';

const Filter = () => {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        width: '100vw',
        height: '100vw',
        position: 'absolute',
        left: '0vw',
        top: '0vw',
      }}
    >
      <img src={pepelaugh} style={{ width: '100%' }} />
    </div>
  );
};

export default Filter;
