import React from 'react';
import PropTypes from 'prop-types';
import styles from './Launch.css';

const Launch = ({ handleStart }) => (
  <section className={styles.Launch}>
    <button onClick={handleStart}>Launch Game</button>
  </section>
);

Launch.propTypes = {
  handleStart: PropTypes.func.isRequired
};

export default Launch;
