import React, { useState, useEffect } from 'react';
import BreakableHearts from './BreakableHearts';
import * as heartScreenActions from '../../redux/actions/heartScreenActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeartSpout from './HeartSpout';

const HeartScreenGenerator = () => {
  const [heartsArray, setHeartsArray] = useState([]);
  const [count, setCount] = useState(0);
  const [generateNew, setGenerateNew] = useState(true);

  useEffect(() => {
    if (count <= 1 && generateNew) {
      setTimeout(() => {
        console.log('generating');
        setGenerateNew(false);
        setHeartsArray([...heartsArray, count + 1]);
        setCount(count + 1);
      }, 1000);
    }
  }, [count, generateNew]);

  const removeHeart = (id) => {
    console.log('removing heart', generateNew);
    setCount(count - 1);
    heartsArray.filter((entry) => entry !== id);
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        //top: '90%',
        height: '100%',
        backgroundColor: 'transparent',
      }}
    >
      {heartsArray.map((entry) => (
        <div
          style={{
            position: 'absolute',
            left: ` ${Math.random() * 100}% `,
            height: '90%',
            zIndex: '99999',
          }}
        >
          <BreakableHearts
            setGenerateNew={setGenerateNew}
            key={entry.id}
            heartId={entry}
            removeHeart={removeHeart}
            left={Math.random() * 100}
          />
        </div>
      ))}
    </div>
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
      setHeartScreen: bindActionCreators(heartScreenActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeartScreenGenerator);
