import React from 'react';
import RcDrawer from 'rc-drawer';

import styles from './header/header.module.css';

function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toogleHandler,
  open,
  width,
  placement,

  ...props
}) {
  return (
    <>
      <RcDrawer
        open={open}
        onClose={toogleHandler}
        className={`${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}
        {...props}>
        {closeButton && (
          <div onClick={toogleHandler} className={styles.mobileClose}>
            {closeButton}
          </div>
        )}
        <div className={styles.mobileDrawer}>{children}</div>
      </RcDrawer>

      <div
        className={'drawer__handler'}
        style={{ display: 'inline-block' }}
        onClick={toogleHandler}>
        {drawerHandler}
      </div>
    </>
  );
}

export default Drawer;

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};
