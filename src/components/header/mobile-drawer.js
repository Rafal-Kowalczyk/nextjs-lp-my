import React, { useState } from 'react';
import Drawer from '../drawer';
import Scrollbars from 'react-custom-scrollbars';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaGitAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

import menuItems from './header.data';
import styles from './header.module.css';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaLinkedinIn />,
  },
  {
    path: '/',
    icon: <FaGitAlt />,
  },
];

function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      width={'320px'}
      drawerHandler={
        <div className={styles.mobileHamburger}>
          <IoMdMenu size='26px' />
        </div>
      }
      open={isDrawerOpen}
      toogleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      closeButton={<IoMdClose size='26px' />}
      drawerStyle={styles.mobileDrawer}
      closeBtnStyle={styles.mobileClose}>
      <Scrollbars autoHide style={{ position: 'absolute' }}>
        <div className={styles.mobileContent}>
          <div className={styles.mobileMenu}>
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
          <div className={styles.menuFooter}>
            <div className={styles.social}>
              {social.map((socialItem, i) => (
                <span key={i} className={styles.socialIcon}>
                  <Link to={socialItem.path}>{socialItem.icon}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Scrollbars>
    </Drawer>
  );
}

export default MobileDrawer;
