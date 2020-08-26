import React, { useState, useEffect } from 'react';
import PoppedHeart from './PoppedHeart';

const BreakableHearts = () => {
  const [popped, setPopped] = useState(false);
  const [height, setHeight] = useState(80);

  useEffect(() => {
    if (!popped) {
      setTimeout(() => {
        setHeight(0.98 * height);
      }, 100);
    }
    if (height <= 10) {
      setPopped(true);
    }
  }, [height]);

  return (
    <div>
      {!popped ? (
        <button
          onClick={() => {
            setPopped(true);
          }}
          style={{
            top: `${height}%`,
            position: 'absolute',
          }}
        >
          Heart
        </button>
      ) : (
        <div
          style={{
            top: `${height}%`,
            position: 'absolute',
          }}
        >
          <PoppedHeart />
        </div>
      )}
    </div>
  );
};

export default BreakableHearts;
