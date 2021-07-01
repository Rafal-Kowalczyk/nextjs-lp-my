import React, { useEffect, useState } from 'react';
import List from '../list/list';

import stylesPricing from '../../sections/pricing/pricing.module.css';
import styles from './price-card.module.css';

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
    <div
      className={
        (header
          ? `${stylesPricing.packageAnim} ${stylesPricing.active}`
          : `${stylesPricing.packageAnim}`,
        `${styles.pricingBox}`)
      }>
      {header && <h3 className={styles.header}>{header}</h3>}
      <div>
        <div
          className={` ${stylesPricing.packageAnim} ${styles.pricingHeader}`}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <List items={points} />
        <p className={`${stylesPricing.packagePriceAnim} ${styles.price}`}>
          {priceWithUnit}
          <span>/Monthly</span>
        </p>
        <div className={styles.buttonPriceWrap}>
          <button
            className={`${styles.buttonPrice} ${stylesPricing.packagePriceAnim}`}
            aria-label={buttonText}>
            {buttonText}
          </button>
          {anotherOption && (
            <button
              className={`${styles.freeTrial} ${stylesPricing.packagePriceAnim}`}
              aria-label={anotherOption}>
              {anotherOption}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
