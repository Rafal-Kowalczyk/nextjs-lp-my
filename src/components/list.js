import React from 'react';

import stylesList from '../sections/pricing/pricing.module.css';

function List({ items = [], parentStyle }) {
  return (
    <ul
      style={{ listStyleType: 'none', margin: 0, padding: 0, ...parentStyle }}
      className={stylesList.packageCardAnim}>
      {items.map((item) => (
        <li
          key={item.id}
          className={
            item.isAvailable ? `${stylesList.open}` : `${stylesList.closed} `
          }>
          <div className={stylesList.listItem}>
            <span className={stylesList.listIcon}> {item.icon}</span>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
