import { useState } from "react";
import styles from "../modules.css/AboutInfo.module.css";
import stylesAbout from "../modules.css/About.module.css";

export default function AboutInfo({ aboutInfo }) {
  const { img, alt, title, description } = aboutInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={stylesAbout.AboutInfo} onClick={() => setIsModalOpen(true)}>
        <div className={stylesAbout.imgContainer}>
          <img src={img} alt={alt} className={styles.image} />
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrapper}>
              <img src={img} alt={alt} className={styles.modalImage} />
            </div>
            <div className={styles.modalText}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
