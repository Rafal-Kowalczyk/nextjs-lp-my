import React from 'react';

import stylesPricing from '../../sections/pricing/pricing.module.css';
import styles from './list.module.css';

function List({ items = [], parentStyle }) {
  return (
    <ul
      style={{ listStyleType: 'none', margin: 0, padding: 0, ...parentStyle }}
      className={stylesPricing.pricingAnim}>
      {items.map((item) => (
        <li
          key={item.id}
          className={item.isAvailable ? `${styles.open}` : `${styles.closed} `}>
          <div className={styles.listItem}>
            <span className={styles.listIcon}> {item.icon}</span>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
