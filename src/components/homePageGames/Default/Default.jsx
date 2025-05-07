import React, { useState } from 'react'
import intoTheAbyss from '../../../assets/intoTheAbyss.jpg'
import intoTheAbyssGray from '../../../assets/intoTheAbyss-gray.jpg'
import styles from './Default.module.css'

const Default = () => {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className={styles.default}>
      <div className={styles.imageWrapper}>
        <img src={intoTheAbyss} alt="Color" className={styles.defaultImg} />
        <img
          src={intoTheAbyssGray}
          alt="Grayscale"
          className={styles.grayImg}
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        />
        <div
          className={styles.divider}
          style={{ left: `${sliderValue}%` }}
        />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className={styles.slider}
      />
    </div>
  )
}

export default Default
