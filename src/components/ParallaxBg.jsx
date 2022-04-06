import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import layer_1 from "../images/layer_1.png";
import layer_2 from "../images/layer_2.png";
import layer_3 from "../images/layer_3.png";
import layer_4 from "../images/layer_4.png";
import layer_5 from "../images/layer_5.png";
import layer_6 from "../images/layer_6.png";
import styles from './ParallaxBg.module.css';

export const ParallaxBg = () => {
  return (
    <div>
      <div className={styles.layer} style={{backgroundImage: `url(${layer_6})`}}/>
      <div className={styles.layer} style={{backgroundImage: `url(${layer_5})`}}/>
      <div className={styles.layer} style={{backgroundImage: `url(${layer_4})`}}/>
      <div className={styles.layer} style={{backgroundImage: `url(${layer_3})`}}/>
      <div className={styles.layer} style={{backgroundImage: `url(${layer_2})`}}/>
      <div className={styles.layer} style={{backgroundImage: `url(${layer_1})`}}/>
    </div>
  )
}
