import React from 'react'
import styles from "../modules.css/DisplayPortfolio.module.css"
import IframeConfig from './IframeConfig'
import { Github, Dock } from "lucide-react";
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
        <div className= {styles.portfoliocontent}>
            <h1 onClick={toggleShow}>{title}</h1>
            {showCont && (<div className={styles.hiddenContent}>
                <p>{description}</p>
                <p>Skills Used:</p>
                <div className={styles.skillsUsed}>
                     {tech.map((t)=><p className={styles.skills} >{t}</p>)} 
                </div>
                <p>Links:</p>
                <div className={styles.links}>
                    {git1 && <p><a href={git1} target="_blank" rel="noopener        noreferrer">
                        <Github size={24} /></a></p>}
                    {git2 && <p><a href={git2} target="_blank" rel="noopener        noreferrer">
                    <Github size={24} /></a></p>}
                    {website && <p><a href={website} target="_blank" rel="noopener        noreferrer">
                    <Dock size={24} /></a></p>}
                </div>
            
            </div>)}
        </div>
        
    </div>
  )
}

export default DisplayPortfolio
