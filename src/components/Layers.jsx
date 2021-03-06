import React, {useState} from 'react';
import { Title } from './Title';
import { Car } from './Car';
import { Shifter } from "./Shifter";
import sky from "../images/sky.png";
import layer1 from "../images/layer1.png";
import layer2 from "../images/layer2.png";
import layer3 from "../images/layer3.png";
import layer4 from "../images/layer4.png";
import layer5 from "../images/layer5.png";
import styles from "./styles/Layers.module.scss";

export const Layers = () => {
  const [speedUp, setSpeedUp] = useState(false)
  
  const handleSpeedClick = () => {
      setSpeedUp(!speedUp)
  }
  return (
    <div className={styles.innerWrapper}>
      <div className={styles.layersContainer} >
        <div  className={`${styles.sky}`} style={{backgroundImage: `url(${sky})`}} />

        {/* LAYER 5 */}
        <div  
          className={`${styles.layers} ${speedUp ? styles.speedUpFive : styles.layerFive}`} 
          style={{backgroundImage: `url(${layer5})`}} />

        {/* LAYER 4 */}
        <div  
          className={`${styles.layers} ${speedUp ? styles.speedUpFour : styles.layerFour}`} 
          style={{backgroundImage: `url(${layer4})`}} />
        
        
        <Title />

        <div onClick={handleSpeedClick}>
          <Shifter/>
        </div>

        {/* LAYER 3 */}
        <div  
          className={`${styles.layers} ${speedUp ? styles.speedUpThree : styles.layerThree}`} 
          style={{backgroundImage: `url(${layer3})`}} />

        {/* LAYER 2 */}
        <div  
          className={`${styles.layers} ${speedUp ? styles.speedUpTwo : styles.layerTwo}`} 
          style={{backgroundImage: `url(${layer2})`}} />

        <Car />

        {/* LAYER 1 */}
        <div  
          className={`${styles.layers} ${speedUp ? styles.speedUpOne : styles.layerOne}`} 
          style={{backgroundImage: `url(${layer1})`}} />


      </div>
    </div>
  )
}
