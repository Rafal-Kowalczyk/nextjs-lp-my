import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import MobileDrawer from './mobile-drawer';

import menuItems from './header.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './header.module.css';

export default function Header({ className }) {
  return (
    <header className={`${layoutStyles.container} ${className}`} id='header'>
      <div
        className={layoutStyles.containerFlexSB}
        style={{ marginBottom: '20px' }}>
        <Logo />
        <div className={styles.flexWrap}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass='active'
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              key={i}>
              {menuItem.label}
            </Link>
          ))}
        </div>
        <button className='donate__btn' aria-label='Start'>
          Start
        </button>
        <MobileDrawer />
      </div>
    </header>
  );
}
