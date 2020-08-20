import React, { useState } from 'react';

const EpicBottomDashboard = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  return (
    <>
      <div style={{ marginLeft: '3rem' }}>
        <button
          style={styles.interactive}
          onClick={() => {
            setDashboardOpen(!dashboardOpen);
          }}
        >
          some icon
        </button>
        {dashboardOpen ? (
          <div style={styles.dashboard}>
            <h1>Dashboard stuff</h1>
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
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    marginLeft: '-0.5rem',
    position: 'absolute',
    top: '25%',
  },
  interactive: {
    width: '5%',
    height: '5%',
    color: 'white',
    backgroundColor: 'red',
    marginLeft: '-0.5rem',
    position: 'absolute',
    top: '20%',
  },
};

export default EpicBottomDashboard;
