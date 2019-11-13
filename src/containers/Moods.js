import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { launchGame, endGame, decrementTimer, handleSelection } from '../actions/emojiActions';
import {
  getActions,
  getFace,
  getGameIsActive,
  getBiking,
  getTimer
} from '../selectors/emojiSelectors';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import Launch from '../components/controls/Launch';
import Timer from '../components/controls/Timer';

const Moods = ({ gameIsActive, handleStart, handleEnd, timer, decrementTimer, actions, face, biking, handleSelection }) => {
  return (
    <>
      {!gameIsActive &&
        <Launch handleStart={handleStart}/>
      }
      {gameIsActive &&
        <>
          <Controls actions={actions} handleSelection={handleSelection}/>
          <Face emoji={face} biking={biking} />
          <Timer timer={timer} decrementTimer={decrementTimer} handleEnd={handleEnd}/>
        </>
      }
    </>
  );
};

const mapStateToProps = state => ({
  gameIsActive: getGameIsActive(state),
  biking: getBiking(state),
  actions: getActions(state),
  face: getFace(state),
  timer: getTimer(state),
});

const mapDispatchToProps = dispatch => ({
  handleStart() {
    dispatch(launchGame());
  },
  handleEnd() {
    dispatch(endGame());
  },
  decrementTimer() {
    dispatch(decrementTimer());
  },
  handleSelection(actionName) {
    dispatch(handleSelection(actionName));
  }
});

Moods.propTypes = {
  timer: PropTypes.number.isRequired,
  biking: PropTypes.number.isRequired,
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
