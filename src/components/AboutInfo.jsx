import styles from "../modules.css/AboutInfo.module.css";
import stylesAbout from "../modules.css/About.module.css";

export default function AboutInfo({ aboutInfo }) {
  const { img, alt, title, description } = aboutInfo;

  return (
    
    <div className={stylesAbout.AboutInfo}>
      <div className={stylesAbout.imgContainer}>
      <img src={img} alt={alt} className={styles.image} />
      </div>
    </div>
  );
}