import React, { useState, useEffect } from 'react';
import PoppedHeart from './PoppedHeart';
import model1 from './model1.jpg';

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

const BreakableHearts = (props) => {
  const [popped, setPopped] = useState(false);
  const [height, setHeight] = useState(80);
  const [removed, setRemoved] = useState(false);
  const [velocity, setVelocity] = useState((Math.random() * 1.5 + 98) / 100);

  useEffect(() => {
    if (popped) {
      setTimeout(() => {
        console.log('generating new');
        props.setGenerateNew(true);
        setRemoved(true);
      }, 1000);
    }
    if (!popped) {
      setTimeout(() => {
        setHeight(velocity * height);
      }, 10);
    }
    if (height <= 10) {
      // setTimeout(() => {
      //   console.log('generating new');
      //   props.setGenerateNew(true);
      //   //setRemoved(true);
      // }, 1000);

      setPopped(true);
    }
  }, [height, popped]);

  return (
    <>
      {!popped && !removed ? (
        <button
          onClick={() => {
            setPopped(true);
          }}
          style={{
            ...heartStyles.heart,
            top: `${height}%`,
          }}
        >
          <img
            src={model1}
            style={{
              width: '5vw',
            }}
          />
        </button>
      ) : !removed && popped ? (
        <div
          style={{
            ...heartStyles.heart,
            top: `${height}%`,
          }}
        >
          <PoppedHeart removeHeart={props.removeHeart} />
        </div>
      ) : null}
    </>
  );
};

export default BreakableHearts;
