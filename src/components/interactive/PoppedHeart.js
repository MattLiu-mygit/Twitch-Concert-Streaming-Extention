import React, { useEffect } from 'react';

const PoppedHeart = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.removeHeart(props.heartId);
    }, 1000);
  }, []);
  return <div>Popped!</div>;
};

export default PoppedHeart;
