import React, { useState, useEffect } from 'react';
import heart from './like.png';
import { setHeartPlume } from '../../redux/actions/heartPlumeActions';
import cuteFrog from './cuteFrog.png';

const heartStyles = {
  heart: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    position: 'absolute',
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
  const [horizontal, setHorizontal] = useState(5);
  const [left, setLeft] = useState(true);

  const horizontalRange = 5 * Math.random();

  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setHeight(0.98 * height);
      }, 10);
    }

    if (height > 10 && horizontal < 5 + horizontalRange && left) {
      setTimeout(() => {
        setHorizontal(horizontal + 0.1);
      }, 10);
    } else if (horizontal >= 5 + horizontalRange && left) {
      setLeft(false);
    }

    if (height > 10 && horizontal > 5 - horizontalRange && !left) {
      setTimeout(() => {
        setHorizontal(horizontal - 0.1);
      }, 10);
    } else if (horizontal <= 5 + horizontalRange && !left) {
      setLeft(true);
    }

    if (height <= 10) {
      setUpdate(false);
      props.removeHeart(props.heartId);
    }
  }, [height]);

  return (
    <>
      {height > 10 ? (
        <img
          src={cuteFrog}
          style={{
            ...heartStyles.heart,
            top: `${height}%`,
            right: `${horizontal}%`,
          }}
        />
      ) : null}
    </>
  );
};

export default HeartSpout;
