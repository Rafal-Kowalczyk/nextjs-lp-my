import React from 'react';
import Link from 'next/link';
import teamStyles from '../sections/team-section/team.module.css';

function TeamCard({ src, altText, title, designation, social }) {
  return (
    <div className={teamStyles.teamCard}>
      <img src={src} alt={altText} className={teamStyles.teamItemImg} />
      <h3 className={teamStyles.teamItemName}>{title}</h3>
      <p className={teamStyles.teamItemDesign}>{designation}</p>
      <div className={teamStyles.socialShare}>
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
