import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import MobileDrawer from './mobile-drawer';

import data from '../../data/header.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './header.module.css';

export default function Header({ className }) {
  return (
    <header
      className={`${layoutStyles.containerFluid} ${layoutStyles.marginCenter} ${styles.header} ${className}`}
      id='header'>
      <div
        className={`${layoutStyles.container} ${layoutStyles.marginCenter} ${layoutStyles.containerFlexSB}`}
        style={{ marginBottom: '10px' }}>
        <Logo />
        <div className={`${styles.flexWrapMenu} ${styles.menuDesktop}`}>
          {data.map((menuItem, i) => (
            <Link
              activeClass={styles.active}
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              key={i}>
              {menuItem.label}
            </Link>
          ))}
        </div>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.headerBtn}>
          Contact
        </Link>
        <MobileDrawer />
      </div>
    </header>
  );
}
