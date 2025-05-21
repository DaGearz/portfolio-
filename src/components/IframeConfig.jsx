import React, { useState } from "react";
import styles from "../modules.css/IframeConfig.module.css";
import noPhoto from "../assets/noPhoto.png";

const IframeConfig = ({ imgIFrame }) => {
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    console.error(`Failed to load iframe: ${imgIFrame}`);
    setIframeError(true);
  };

  if (!imgIFrame || iframeError) {
    return (
      <img
        src={noPhoto}
        alt="No preview available"
        width="300"
        height="300"
        className={styles.fallbackImage}
      />
    );
  }

  return (
    <iframe
      className={styles.IframeConfig}
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
      onError={handleIframeError}
    />
  );
};

export default IframeConfig;
