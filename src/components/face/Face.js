import React from 'react';
import PropTypes from 'prop-types';
import styles from './Face.css';

const Face = ({ emoji, biking }) => (
  <div className={styles.Face}>
    <div biking={`${biking}`}>{emoji}</div>
  </div>
);

Face.propTypes = {
  emoji: PropTypes.string.isRequired,
  biking: PropTypes.number.isRequired
};

export default Face;
