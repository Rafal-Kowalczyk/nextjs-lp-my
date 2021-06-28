import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import MobileDrawer from './mobile-drawer';

import menuItems from './header.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './header.module.css';

export default function Header({ className }) {
  return (
    <header
      className={`${layoutStyles.containerFluid} ${layoutStyles.marginCenter} ${className}`}
      id='header'>
      <div
        className={`${layoutStyles.container} ${layoutStyles.marginCenter} ${layoutStyles.containerFlexSB}`}
        style={{ marginBottom: '10px' }}>
        <Logo />
        <div className={`${styles.flexWrap} ${styles.menuDesktop}`}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass='active'
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}>
              {menuItem.label}
            </Link>
          ))}
        </div>
        <button className={styles.headerBtn} aria-label='Zobacz więcej'>
          Zobacz więcej
        </button>
        <MobileDrawer />
      </div>
    </header>
  );
}
