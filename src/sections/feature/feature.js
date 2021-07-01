import React from 'react';
import SectionHeader from '../../components/section-header';
import FeatureCard from '../../components/feature-card';

import Performance from '../../../public/images/feature/performance.svg';
import Partnership from '../../../public/images/feature/partnership.svg';
import Subscription from '../../../public/images/feature/subscription.svg';
import Support from '../../../public/images/feature/support.svg';

import layoutStyles from '../../styles/layout.module.css';
import styles from './feature.module.css';

const dataFeature = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscriptione',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

const Feature = () => {
  return (
    <section
      id='features'
      className={`${layoutStyles.containerFluid} ${styles.section}`}>
      <div className={`${layoutStyles.container} ${layoutStyles.marginCenter}`}>
        <SectionHeader
          slogan='WHATS THE FUNCTION'
          title='Meet the feature of product'
        />
        <div className={styles.cardsBox}>
          {dataFeature.map((item) => (
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
