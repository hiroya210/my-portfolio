import { Title } from './Title';
import middle from "../images/middle.png";
import styles from "./Tiles.module.css";

export const Tiles = () => {
 
  const generateTiles = () => {
    let tiles = [];
    for (let i = 0; i < 48; i++) {
      tiles.push(
        <div className={styles.midTiles} key={i}>
          <img src={middle} alt="middle" width={"50px"} height={"50px"}/>
        </div>
      );
    }
    return tiles;
  }

  return generateTiles()

}
