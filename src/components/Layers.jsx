import { Title } from './Title';
import { useParallax } from 'react-scroll-parallax';
import sky from "../images/sky.png";
import layer1 from "../images/layer1.png";
import layer2 from "../images/layer2.png";
import layer3 from "../images/layer3.png";
import layer4 from "../images/layer4.png";
import layer5 from "../images/layer5.png";
import styles from "./Layers.module.css";

export const Layers = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.layersContainer} >
          <div  className={`${styles.layers}`} style={{backgroundImage: `url(${sky})`}} />
          <div  className={`${styles.layers} ${styles.farthest}`} style={{backgroundImage: `url(${layer5})`}} />
          <div  className={styles.layers} style={{backgroundImage: `url(${layer4})`}} />
          <div  className={styles.layers} style={{backgroundImage: `url(${layer3})`}} />
          <div  className={styles.layers} style={{backgroundImage: `url(${layer2})`}} />
          <div  className={styles.layers} style={{backgroundImage: `url(${layer1})`}} />
        </div>
      </div>
    </div>
  )
}
