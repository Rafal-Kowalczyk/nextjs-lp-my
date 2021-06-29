import React from 'react';

function List({ items = [], parentStyle, childStyle }) {
  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      {items.map((item) => (
        <li key={item.id}>
          {item.icon}
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
