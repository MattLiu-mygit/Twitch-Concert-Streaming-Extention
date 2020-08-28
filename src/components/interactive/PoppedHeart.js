import React, { useEffect } from 'react';
import frog2 from './frog2.jpg';

const PoppedHeart = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.removeHeart(props.heartId);
    }, 1000);
  }, []);
  return (
    <div>
      <img
        src={frog2}
        style={{
          width: '5vw',
        }}
      />
    </div>
  );
};

export default PoppedHeart;
