
import React from 'react'
import styles from '../modules.css/IframeConfig.module.css'


const IframeConfig = ({imgIFrame}) => {

  
  return (
    
    <iframe className={styles.IframeConfig}
      src={imgIFrame}
      width="300"
      height="300"
      loading="lazy"
      style={{
        pointerEvents: "none",       
        overflow: "hidden",
        border: "none",         
      }}
      scrolling="no" 
    />
  )
}

export default IframeConfig
