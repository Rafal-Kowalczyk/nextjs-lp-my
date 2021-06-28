import React from 'react';

import styles from '../sections/feature/feature.module.css';

function FeatureCard({ src, alt, title, text }) {
  return (
    <div className={styles.card}>
      <img src={src} alt={alt} className={styles.cardImg} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureCard;
