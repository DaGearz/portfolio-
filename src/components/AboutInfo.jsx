import styles from "../modules.css/AboutInfo.module.css";

export default function AboutInfo({ aboutInfo }) {
  const { img, alt, title, description } = aboutInfo;

  return (
    <div className={styles.AboutInfo}>
      
      <img src={img} alt={alt} className={styles.image} />
      
    </div>
  );
}