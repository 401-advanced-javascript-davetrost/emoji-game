import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.css';

const Timer = ({ timer, handleEnd, decrementTimer }) => {
  useEffect(() => {
    if(timer > 0){
      setTimeout(decrementTimer, 1000);
    }
    else {
      handleEnd();
    }
  }, [timer]);

  return (
    <section className={styles.Timer}>
      <h2>Time Remaining: {timer}</h2>
    </section>
  );
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  decrementTimer: PropTypes.func.isRequired,
  handleEnd: PropTypes.func.isRequired,
};

export default Timer;
