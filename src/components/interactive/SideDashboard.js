import React, { useState } from 'react';
import model1 from './model1.jpg';

const SideDashboard = (props) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  return (
    <>
      <div style={{ marginLeft: '3rem', zIndex: '100000' }}>
        <button
          style={{ ...styles.interactive, zIndex: '100000' }}
          onClick={() => {
            setDashboardOpen(!dashboardOpen);
          }}
        >
          <img src={model1} style={{ height: '100%', opacity: '0.75' }} />
        </button>
        {dashboardOpen ? (
          <div style={{ ...styles.dashboard, zIndex: '100000' }}>
            <img src={model1} style={{ width: '100%', opacity: '0.75' }} />
          </div>
        ) : null}
      </div>
    </>
  );
};

const styles = {
  dashboard: {
    width: '25%',
    height: '50%',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    marginLeft: '-0.5rem',
    position: 'absolute',
    top: '25%',
  },
  interactive: {
    width: '5%',
    height: '5%',
    color: 'white',
    backgroundColor: 'rgba(0, 255, 255, 0.75)',
    marginLeft: '-0.5rem',
    position: 'absolute',
    top: '20%',
  },
};

export default SideDashboard;
