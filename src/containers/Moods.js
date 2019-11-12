import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';

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

Moods.propTypes = {
  actions: PropTypes.array.isRequired,
  face: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
