import React from 'react';
import stylesPricing from '../sections/pricing/pricing.module.css';

function PriceCard({
  data: {
    header,
    name,
    desc,
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
        <div
          className={`${stylesPricing.package__header} ${stylesPricing.pricingHeader}`}>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
