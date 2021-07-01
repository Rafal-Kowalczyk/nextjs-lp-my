import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import data from '../../data/footer.data';
import social from '../../data/social-icon.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './footer.module.css';

function Footer() {
  return (
    <div
      className={`${layoutStyles.containerFluid} ${styles.footer}`}
      id='contact'>
      <div
        className={`${layoutStyles.container} ${layoutStyles.marginCenter} `}>
        <div className={styles.footerWrap}>
          <Logo />
          <div className={styles.footerConatct}>
            <div className={styles.footerItems}>
              {data.map((item) => (
                <div key={item.id} className={styles.footerItem}>
                  <span className={styles.footerItemIcon}>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.footerSocial}>
              {social.map((item, i) => (
                <span key={i} className={styles.footerSocialIcon}>
                  <Link to={item.path}>{item.icon}</Link>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.footerCopy}>
            <p>Idea design Startup Landing</p>
            <p>Use and performance RK . 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
