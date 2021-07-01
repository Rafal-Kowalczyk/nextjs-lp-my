import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import MobileDrawer from './mobile-drawer';

import data from '../../data/header.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './header.module.css';

export default function Header() {
  return (
    <header
      className={`${layoutStyles.containerFluid} ${layoutStyles.marginCenter}`}
      id='header'>
      <div
        className={`${layoutStyles.container} ${layoutStyles.marginCenter} ${layoutStyles.containerFlexSB}`}
        style={{ marginBottom: '10px' }}>
        <Logo />
        <div className={`${styles.flexWrap} ${styles.menuDesktop}`}>
          {data.map((menuItem, i) => (
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
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.headerBtn}>
          Kontakt
        </Link>
        <MobileDrawer />
      </div>
    </header>
  );
}
