import React, { useState, useEffect } from 'react';
import noPhoto from '../assets/noPhoto.png';
import daggit from '../assets/daggit_demo.png';
import mernstack from '../assets/mernstack.png';

const ImageTest = () => {
  const [noPhotoError, setNoPhotoError] = useState(false);
  const [daggitError, setDaggitError] = useState(false);
  const [mernstackError, setMernstackError] = useState(false);

  useEffect(() => {
    console.log('Image paths:', {
      noPhoto,
      daggit,
      mernstack
    });
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
      <h2>Image Test Component</h2>
      <p>This component tests if images can be loaded correctly.</p>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>noPhoto.png</h3>
        {noPhotoError ? (
          <p style={{ color: 'red' }}>Failed to load noPhoto.png</p>
        ) : (
          <img 
            src={noPhoto} 
            alt="No Photo" 
            width="200" 
            height="200"
            style={{ border: '1px solid #ccc' }}
            onError={() => setNoPhotoError(true)}
          />
        )}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>daggit_demo.png</h3>
        {daggitError ? (
          <p style={{ color: 'red' }}>Failed to load daggit_demo.png</p>
        ) : (
          <img 
            src={daggit} 
            alt="Daggit Demo" 
            width="200" 
            height="200"
            style={{ border: '1px solid #ccc' }}
            onError={() => setDaggitError(true)}
          />
        )}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>mernstack.png</h3>
        {mernstackError ? (
          <p style={{ color: 'red' }}>Failed to load mernstack.png</p>
        ) : (
          <img 
            src={mernstack} 
            alt="MERN Stack" 
            width="200" 
            height="200"
            style={{ border: '1px solid #ccc' }}
            onError={() => setMernstackError(true)}
          />
        )}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Direct Path Test</h3>
        <img 
          src="/src/assets/daggit_demo.png" 
          alt="Direct Path Test" 
          width="200" 
          height="200"
          style={{ border: '1px solid #ccc' }}
          onError={(e) => {
            console.error('Direct path failed:', e);
            e.target.style.display = 'none';
            document.getElementById('direct-path-error').style.display = 'block';
          }}
        />
        <p id="direct-path-error" style={{ color: 'red', display: 'none' }}>
          Failed to load with direct path
        </p>
      </div>
    </div>
  );
};

export default ImageTest;
