import React, { useState } from "react";
import intoTheAbyss from "../../../assets/intoTheAbyss.jpg";
import intoTheAbyssGray from "../../../assets/intoTheAbyss-gray.jpg";
import intoTheAbyssCartoon from "../../../assets/intoTheAbyss-cartoon.png";
import styles from "./CartoonMyImage.module.css";

const CartoonMyImage = () => {
  const [sliderValue, setSliderValue] = useState(() => {
    return localStorage.getItem("slider") || 50;
  });

  return (
    <div className={styles.default}>
      <div className={styles.imageWrapper}>
        <img src={intoTheAbyss} alt="Color" className={styles.defaultImg} />
        <img
          src={intoTheAbyssCartoon}
          alt="cartoon img of me"
          className={styles.grayImg}
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        />
        <div className={styles.divider} style={{ left: `${sliderValue}%` }} />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => {
          setSliderValue(e.target.value);
          localStorage.setItem("slider", e.target.value);
        }}
        className={styles.slider}
      />
    </div>
  );
};

export default CartoonMyImage;
