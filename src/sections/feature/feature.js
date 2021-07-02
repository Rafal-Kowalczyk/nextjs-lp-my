import React from 'react';
import SectionHeader from '../../components/section-header';
import FeatureCard from '../../components/feature-card';

import data from '../../data/feature.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './feature.module.css';

const Feature = () => {
  return (
    <section
      id='features'
      className={`${layoutStyles.containerFluid} ${styles.section}`}>
      <div className={`${layoutStyles.container} `}>
        <SectionHeader
          slogan='WHATS THE FUNCTION'
          title='Meet the feature of product'
        />
        <div className={styles.cardsBox}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
