import React from 'react';
import Image from 'next/image';

import bannerImg from '../../../public/images/banner-thumb.png';

import layoutStyles from '../../styles/layout.module.css';
import styles from './hero.module.css';

function Hero() {
  return (
    <section
      className={`${layoutStyles.containerFluid} ${styles.heroBg}`}
      id='home'>
      <div className={`${layoutStyles.container} ${styles.containerBox}`}>
        <h1>Top Quality Digital Products To Explore</h1>
        <p>
          Get your blood tests delivered at let home collect sample from the
          victory of the managements that supplies best design system guidelines
          ever.
        </p>
      </div>
      <div className={styles.heroImgBox}>
        <img src={bannerImg} alt='Banner' className={styles.bannerImg} />
      </div>
    </section>
  );
}

export default Hero;
