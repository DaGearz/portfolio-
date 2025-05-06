import React from 'react'
import styles from "../modules.css/DisplayPortfolio.module.css"
import IframeConfig from './IframeConfig'

const DisplayPortfolio = ({projectData}) => {
    const {id, title, description, img, imgIFrame, tech, git1, git2, website, usePortfolio, useFeature} = projectData

  return (
    <div className={styles.DisplayPortfolio}>
        
        
        {img 
        ?   <div className= {styles.containerIframe} >
                <img src={img} alt="img representing code" width="300" height="300" /> 
            </div>
        :   <div className= {styles.containerIframe} >
                <IframeConfig imgIFrame={imgIFrame}/> 
            </div>}
        <div className= {styles.portfoliocontent}>
            <h1>{title}</h1>
            <p>teeeeeeeeeeeeeeeee</p>
        </div>
        
    </div>
  )
}

export default DisplayPortfolio
