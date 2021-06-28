import React from 'react';

import layoutStyles from '../styles/layout.module.css';

export default function SectionHeader({ title, slogan }) {
  return (
    <div className={layoutStyles.sectionHeader}>
      <h5>{slogan}</h5>
      <h2>{title}</h2>
    </div>
  );
}
