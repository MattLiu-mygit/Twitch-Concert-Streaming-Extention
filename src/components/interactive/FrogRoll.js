import React, { useState, useEffect } from 'react';
import datboii from './datboii.gif';

const DatBoi = () => {
  const [rendered, setRendered] = useState(true);
  const [horizontal, setHorizontal] = useState(100);

  useEffect(() => {
    if (horizontal >= -25) {
      setTimeout(() => {
        setHorizontal(horizontal - 0.1);
      }, 10);
    } else {
      setRendered(false);
    }
  }, [rendered, horizontal]);

  return (
    <>
      {rendered ? (
        <img
          src={datboii}
          style={{
            position: 'absolute',
            left: `${horizontal}%`,
            height: '100%',
          }}
        />
      ) : null}
    </>
  );
};

export default DatBoi;
