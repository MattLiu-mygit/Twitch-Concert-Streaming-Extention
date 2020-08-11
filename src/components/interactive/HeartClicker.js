import React, { useState } from 'react';
import heart from './like.png';
import HeartSpout from './HeartSpout';
import * as heartPlumeActions from '../../redux/actions/heartPlumeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const heartStyles = {
  heartStyle: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    position: 'absolute',
    top: '80%',
    right: '5%',
    color: 'pink',
    display: 'inline-block',
    textAlign: 'center',
    padding: '0rem',
    width: '5vw',
    outline: 'none',
  },
};

const HeartClicker = () => {
  const [width, setWidth] = useState(5);
  const [hearts, setHearts] = useState(false);

  const handleClick = () => {
    setWidth(4);
    setHearts(true);
    setTimeout(() => {
      setWidth(5);
    }, 100);

    addHeart();
  };

  return (
    <>
      {/* <HeartSpout /> */}
      <button
        className="heartButton"
        onClick={handleClick}
        style={heartStyles.heartStyle}
      >
        <img src={heart} style={{ margin: '0rem', width: `${width}vw` }} />
      </button>
      {hearts ? (
        <>
          <HeartSpout setHearts={setHearts} />
        </>
      ) : null}
    </>
  );
};

function mapStateToProps(state) {
  return {
    heartPlume: state.heartPlume,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setHeartPlume: bindActionCreators(heartPlumeActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeartClicker);
