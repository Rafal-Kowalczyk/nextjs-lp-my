import React from 'react';

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

import styles from './button-group.module.css';

function ButtonGroup({ next, previous }) {
  return (
    <div className={styles.buttonGroupWrap}>
      <div className={`${styles.buttonGroup}`}>
        <button onClick={previous} aria-label='Previous'>
          <IoIosArrowRoundBack />
        </button>
        <button onClick={next} aria-label='Next'>
          <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
