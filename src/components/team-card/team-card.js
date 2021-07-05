import React from 'react';
import Link from 'next/link';
import styles from './team-card.module.css';

function TeamCard({ src, altText, title, designation, social }) {
  return (
    <div className={styles.teamCard}>
      <img src={src} alt={altText} className={styles.teamItemImg} />
      <h3 className={styles.teamItemName}>{title}</h3>
      <p className={styles.teamItemDesign}>{designation}</p>
      <div className={styles.socialShare}>
        {social.map((item) => (
          <Link key={item.id} href={item.path} className={item.name}>
            <a>{item.icon}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
