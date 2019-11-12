import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import Launch from '../components/controls/Launch';
import Timer from '../components/controls/Timer';

const Moods = ({ gameIsActive, handleStart, handleEnd, timer, decrementTimer, actions, face, handleSelection }) => {
  return (
    <>
      {!gameIsActive &&
        <Launch handleStart={handleStart}/>
      }
      {gameIsActive &&
        <>
          <Controls actions={actions} handleSelection={handleSelection}/>
          <Face emoji={face} />
          <Timer timer={timer} decrementTimer={decrementTimer} handleEnd={handleEnd}/>
        </>
      }
    </>
  );
};

const mapStateToProps = state => ({
  gameIsActive: state.gameIsActive,
  actions: state.getActions(state),
  face: state.getFace(state),
  timer: state.timer,
});

const mapDispatchToProps = dispatch => ({
  handleStart() {
    dispatch({ type: 'LAUNCH_GAME' });
  },
  handleEnd() {
    dispatch({ type: 'END_GAME' });
  },
  decrementTimer() {
    dispatch({ type: 'DECREMENT_TIMER' });
  },
  handleSelection(actionName) {
    dispatch({ type: actionName });
  }
});

Moods.propTypes = {
  timer: PropTypes.number.isRequired,
  gameIsActive: PropTypes.bool.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleEnd: PropTypes.func.isRequired,
  decrementTimer: PropTypes.func.isRequired,
  actions: PropTypes.array.isRequired,
  face: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
