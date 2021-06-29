import React from 'react';

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

function ButtonGroup({ next, previous }) {
  return <div>button</div>;
}

export default ButtonGroup;

const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'text',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
