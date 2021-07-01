import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import SectionHeader from '../../components/section-header';
import data from '../../data/service.data';
import BgVideo from '../../../public/images/service-thumb.png';

import layoutStyles from '../../styles/layout.module.css';
import styles from './service.module.css';

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
          <SectionHeader
            slogan='OUR SERVICES'
            title='Business Goals Achieved with Design'
          />
          <div className={styles.desc}>
            <div className={styles.descBox}>
              {data.map((item) => (
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
