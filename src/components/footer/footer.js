import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Logo from '../logo';
import data from './footer.data';

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
              <Link href='/'>
                <a className={styles.footerSocialIcon}>
                  <FaGithubSquare />
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.footerSocialIcon}>
                  <FaLinkedin />
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.footerSocialIcon}>
                  <FaFacebookSquare />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.footerCopy}>
            <p> Idea design Startup Landing</p>
            <p>Use and performance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
