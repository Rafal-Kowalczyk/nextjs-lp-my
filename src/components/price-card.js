import React from 'react';
import List from './list';

import stylesPricing from '../sections/pricing/pricing.module.css';

function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start free trial',
    anotherOption,
    points,
  },
}) {
  return (
    <div className={`${stylesPricing.pricingBox}`}>
      {header && <h3 className={stylesPricing.header}>{header}</h3>}
      <div>
        <div className={`${stylesPricing.pricingHeader}`}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <List items={points} />
      </div>
    </div>
  );
}

export default PriceCard;
