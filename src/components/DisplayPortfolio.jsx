import React from 'react'
import styles from "../modules.css/DisplayPortfolio.module.css"
import IframeConfig from './IframeConfig'
import { useState } from 'react';

const DisplayPortfolio = ({projectData}) => {
    const {id, title, description, img, imgIFrame, tech, git1, git2, website, usePortfolio, useFeature} = projectData;

    const [showCont, setShowCont] = useState(false);

    function toggleShow () {
        setShowCont(!showCont)
    }




  return (
    <div className={styles.DisplayPortfolio}>
        
        
        {img 
        ?   <div className= {styles.containerIframe} >
                <img src={img} alt="img representing code" width="300" height="300" /> 
            </div>
        :   <div className= {styles.containerIframe} >
                <IframeConfig imgIFrame={imgIFrame}/> 
            </div>}
        <div className= {`${styles.portfoliocontent} bColor1`}>
            <h1 onClick={toggleShow}>{title}</h1>
            {showCont && (<div className={styles.hiddenContent}>
                <p>{description}</p>
                <p>Skills Used:</p>
                <div className={styles.skillsUsed}>
                     {tech.map((t)=><p className={styles.skills} >{t}</p>)} 
                </div>
                <p>Links:</p>
                <div className={styles.links}>
                    <ul>
                        {git1[0] && <li><a href={git1[0]} target="_blank" rel="noopener noreferrer">{git1[1]}</a></li>}
                        {git2[0] && <li><a href={git2[0]} target="_blank" rel="noopener noreferrer">{git2[1]}</a></li>}
                        {website && <li><a href={website} target="_blank" rel="noopener noreferrer">Deployed Website</a></li>}
                    </ul>
            
                </div>
            
            </div>)}
        </div>
        
    </div>
  )
}

export default DisplayPortfolio
