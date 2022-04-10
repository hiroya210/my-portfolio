import React from 'react'
import car from '../images/car.png'
import carwheel from '../images/carwheel.png'
import styles from './Car.module.css'

export const Car = () => {
  return (
      <>
        <div className={styles.carBody}>
            <img src={car} alt="car" width={"300px"}/>
            <div className={`${styles.wheels} ${styles.carWheel1}`}>
                <img src={carwheel} alt="carwheel" width={"50px"}/>
            </div>
            <div className={`${styles.wheels} ${styles.carWheel2}`}>
                <img src={carwheel} alt="carwheel" width={"50px"}/>
            </div>
            <div className={styles.shadow}/>
        </div>

      </>
  )
}
