import React from 'react';
import RcDrawer from 'rc-drawer';

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
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <>
      <RcDrawer
        open={open}
        onClose={toogleHandler}
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}
        {...props}>
        {closeButton && (
          <div onClick={toogleHandler} style={{ closeBtnStyle }}>
            {closeButton}
          </div>
        )}
        <div style={{ drawerStyle }}>{children}</div>
      </RcDrawer>

      <div
        className='drawer__handler'
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
