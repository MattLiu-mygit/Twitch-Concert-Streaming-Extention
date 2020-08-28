import React, { useState } from 'react';
import heart from './like.png';
import HeartSpout from './HeartSpout';
import * as heartPlumeActions from '../../redux/actions/heartPlumeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cuteFrog from './cuteFrog.png';

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
  const [heartsArray, setHeartsArray] = useState([]);
  const [count, setCount] = useState(0);

  const removeHeart = (id) => {
    heartsArray.filter((entry) => entry !== id);
  };

  const handleClick = () => {
    setWidth(4);
    setHeartsArray([...heartsArray, count + 1]);
    setCount(count + 1);
    setTimeout(() => {
      setWidth(5);
    }, 100);
  };

  return (
    <>
      {/* <HeartSpout /> */}
      <button
        className="heartButton"
        onClick={handleClick}
        style={{ ...heartStyles.heartStyle, zIndex: '99999' }}
      >
        <img src={cuteFrog} style={{ margin: '0rem', width: `${width}vw` }} />
      </button>
      {heartsArray.map((entry) => (
        <HeartSpout key={entry.id} heartId={entry} removeHeart={removeHeart} />
      ))}
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
