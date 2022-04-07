import React, {useRef} from 'react'
import { Title } from './Title';
import { useParallax } from 'react-scroll-parallax';
import layer_1 from "../images/layer_1.png";
import layer_2 from "../images/layer_2.png";
import layer_3 from "../images/layer_3.png";
import layer_4 from "../images/layer_4.png";
import layer_5 from "../images/layer_5.png";
import layer_6 from "../images/layer_6.png";
import styles from './ParallaxBg.module.css';

export const ParallaxBg = () => {

  const target = useRef(null);

  const layerFour = useParallax({
    speed: 5,
    targetElement: target.current,
  });

  const layerThree = useParallax({
    speed: 12,
    targetElement: target.current,
  });

  const layerTwo = useParallax({
    speed: 75,
    targetElement: target.current,
  });
  const layerOne = useParallax({
    speed: 100,
    targetElement: target.current,
  });
  const layerFourExtend = 5 * 5 * -1;
  const layerThreeExtend = 12 * 5 * -1;
  const layerTwoExtend = 75 * 5 * -1;
  const layerOneExtend = 100 * 5 * -1;
 
  return (
    <div className={styles.root} ref={target}>
      {/* LAYER 6 (BG) */}
      <div 
        className={styles.layer} 
        style={{
          backgroundImage: `url(${layer_6})`, 
          left: 0,
          right: 0
        }}/>


      {/* LAYER 5 */}  
      <div 
        className={styles.layer}
        style={{
          backgroundImage: `url(${layer_5})`,
          left: 0,
          right: 0,
        }}/>

      {/* LAYER 4 */}
      <div
        ref={layerFour.ref}
        className={`${styles.layer} ${styles.clouds}`} 
        style={{
          backgroundImage: `url(${layer_4})`,
          left: layerFourExtend,
          right: layerFourExtend,
        }}/>
      
      {/* LAYER 3 */}
      <div 
        ref={layerThree.ref} 
        className={styles.layer} 
        style={{
          backgroundImage: `url(${layer_3})`, 
          left: layerThreeExtend,
          right: layerThreeExtend,
        }}/>
<Title />
      {/* LAYER 2 */}
      <div 
        ref={layerTwo.ref} 
        className={styles.layer} 
        style={{
          backgroundImage: `url(${layer_2})`,
          left: layerTwoExtend,
          right: layerTwoExtend,
        }}/>
      
      {/* LAYER 1 */}
      <div 
        ref={layerOne.ref} 
        className={styles.layer} 
        style={{
          backgroundImage: `url(${layer_1})`, 
          left: layerOneExtend, 
          right: layerOneExtend
        }}/>

    </div>
  )

}
