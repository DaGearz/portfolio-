import React from 'react'
import intotheabyss from '../../assets/intotheabyss.jpg'
import styles from '../../modules.css/Default.module.css'

const Default = () => {
  return (
    <div className={styles.default}>
        <img src={intotheabyss} alt='Me looking off a mountain in Anza-Borrego' className={styles.defaultImg}></img>
    </div>
  )
}

export default Default
