import React from 'react';

import SectionHeader from '../../components/section-header';
import TeamCard from '../../components/team-card/team-card';
import data from '../../data/team.data';

import layoutStyles from '../../styles/layout.module.css';
import styles from './team.module.css';

function TeamSection() {
  return (
    <div
      className={`${layoutStyles.containerFluid} ${styles.containerMargin}`}
      id='team'>
      <div className={`${layoutStyles.container} ${layoutStyles.marginCenter}`}>
        <SectionHeader
          slogan='OUR TEAM'
          title='The most qualified and talented individuals'
        />
        <div className={styles.teamWrap}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
