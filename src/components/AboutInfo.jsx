
import styles from "../modules.css/About.module.css"
export default function AboutInfo(data){


    return(

        <div className={styles["about-container"]}>

        <div className={styles.snippet}>
            <img src={data.img} alt={data.alt} />
        </div>

        </div>
    )
    
}