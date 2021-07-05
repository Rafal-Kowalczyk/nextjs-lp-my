import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';

import data from '../../data/pricing.data';
import ButtonGroup from '../../components/button-group/button-group';
import SectionHeader from '../../components/section-header';
import PriceCard from '../../components/price-card/price-card';

import layoutStyles from '../../styles/layout.module.css';
import styles from './pricing.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

const sliderParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: '',
  slidesToSlide: 1,
  items: 3,
  containerClass: `${styles.carouselContainer}`,
  customButtonGroup: <ButtonGroup />,
  dotListClass: '',
  focusOnSelect: false,
  infinite: false,
  keyBoardControl: false,
  itemClass: '',
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: '',
};

function Pricing() {
  const { monthly, annual } = data;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({
        active: 'annual',
        pricingPlan: annual,
      });
    } else {
      setState({
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  return (
    <section
      className={`${layoutStyles.containerFluid} ${styles.pricingSection}`}
      id='pricing'>
      <div className={`${layoutStyles.container}`}>
        <SectionHeader
          slogan='PRICING PLAN'
          title='Choose your pricing policy'
        />
        <div className={styles.flexWrapBtn}>
          <div className={styles.pricingButtons}>
            <button
              className={state.active === 'monthly' ? `${styles.active}` : ''}
              type='button'
              aria-label='Monthly'
              onClick={() => handlePricingPlan('monthly')}>
              Monthly Plan
            </button>
            <button
              className={state.active === 'annual' ? `${styles.active}` : ''}
              type='button'
              aria-label='Annual'
              onClick={() => handlePricingPlan('annual')}>
              Annual Plan
            </button>
          </div>
        </div>
        <div className={`${styles.pricingWrap}`}>
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <div className={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
