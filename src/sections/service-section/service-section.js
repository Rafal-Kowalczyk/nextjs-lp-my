import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import Smart from '../../../public/images/feature/subscription.svg';
import Secure from '../../../public/images/feature/partnership.svg';
import BgVideo from '../../../public/images/service-thumb.png';
import { IoIosPlay } from 'react-icons/io';

import layoutStyles from '../../styles/layout.module.css';
import styles from './service.module.css';

const dataService = {
  subTitle: 'OUR SERVICES',
  title: 'Business Goals Achieved with Design',
  services: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Smart',
      title: 'Smart Features',
      text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Secure',
      title: 'Secure Contents',
      text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
  ],
};

function ServiceSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return (
    <section className={layoutStyles.containerFluid}>
      <div className={`${layoutStyles.container} ${layoutStyles.marginCenter}`}>
        <div className={styles.contentWrap}>
          <h5>{dataService.subTitle}</h5>
          <h2>{dataService.title}</h2>
          <div className={styles.desc}>
            <div className={styles.descBox}>
              {dataService.services.map((item) => (
                <div key={item.id} className={styles.descBoxItem}>
                  <img
                    src={item.imgSrc}
                    alt={item.altText}
                    className={styles.descBoxItemImg}
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.videoBox}>
              <img src={BgVideo} alt='Services' className={styles.videoImg} />
              <button
                className={styles.videoBtn}
                onClick={handleClick}
                aria-label='Play'>
                <span className={styles.videoBtnSpan}>
                  <IoIosPlay />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <ModalVideo
          channel='youtube'
          isOpen={videoOpen}
          videoId='mTz0GXj8NN0'
          onClose={() => setVideoOpen(false)}
        /> */}
      </div>
    </section>
  );
}

export default ServiceSection;

const stylesVideo = {
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
