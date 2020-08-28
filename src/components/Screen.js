import React, { useState } from 'react';
import HeartClicker from './interactive/HeartClicker';
import SideDashboard from './interactive/SideDashboard';
import HeartScreenGenerator from './interactive/HeartScreenGenerator';
import FrogRoll from './interactive/FrogRoll';
import Filter from './Filter';

const Screen = () => {
  const [filter, setFilter] = useState(false);
  const [generator, setGenerator] = useState(false);
  const [bois, setBois] = useState([]);

  const clickDatBoi = () => {
    setBois([...bois, bois.length]);
  };

  return (
    <div>
      {filter ? <Filter /> : null}
      <button
        style={{ zIndex: '99998' }}
        onClick={() => {
          setGenerator(!generator);
        }}
      >
        Toggle generator
      </button>
      <button
        style={{ zIndex: '100000', position: 'absolute' }}
        onClick={() => {
          setFilter(!filter);
        }}
      >
        Toggle Filter
      </button>
      <SideDashboard setDatBoi={clickDatBoi} />
      <HeartClicker />
      {generator ? (
        <>
          <HeartScreenGenerator />
          <HeartScreenGenerator />
          <HeartScreenGenerator />
          <HeartScreenGenerator />
          <HeartScreenGenerator />
          <HeartScreenGenerator />
          <HeartScreenGenerator />
          <HeartScreenGenerator />
        </>
      ) : null}
      {bois.map((boi) => (
        <FrogRoll key={boi} />
      ))}
    </div>
  );
};

export default Screen;
