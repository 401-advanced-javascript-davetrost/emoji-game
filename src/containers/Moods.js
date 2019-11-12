import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const Moods = ({ actions, face, handleSelection }) => {
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};

const mapStateToProps = state => ({
  actions: state.getActions(state),
  face: state.getFace(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(actionName) {
    dispatch({ type: actionName });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
