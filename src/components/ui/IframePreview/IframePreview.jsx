import React from 'react';
import './IframePreview.css';

const IframePreview = ({ src, title, className = '' }) => {
  return (
    <div className={`iframe-preview ${className}`}>
      <iframe
        src={src}
        title={title}
        className="iframe-preview__frame"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
      <div className="iframe-preview__overlay">
        <div className="iframe-preview__overlay-content">
          <span className="iframe-preview__overlay-text">Live Preview</span>
          <span className="iframe-preview__overlay-subtitle">Click to visit site</span>
        </div>
      </div>
    </div>
  );
};

export default IframePreview;
