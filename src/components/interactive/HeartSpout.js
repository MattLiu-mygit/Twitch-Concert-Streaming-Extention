import React, { useState, useEffect } from 'react';
import heart from './like.png';
import { setHeartPlume } from '../../redux/actions/heartPlumeActions';

const heartStyles = {
  heart: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    position: 'absolute',
    right: '5%',
    color: 'pink',
    display: 'inline-block',
    textAlign: 'center',
    padding: '0rem',
    width: '5vw',
    outline: 'none',
  },
};

const HeartSpout = (props) => {
  const [height, setHeight] = useState(80);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setHeight(0.995 * height);
      }, 1);
    }
    if (height <= 10) {
      setUpdate(false);
      props.setHearts(false);
    }
  }, [height]);
  return (
    <>
      {height > 5 ? (
        <img src={heart} style={{ ...heartStyles.heart, top: `${height}%` }} />
      ) : null}
    </>
  );
};

export default HeartSpout;
