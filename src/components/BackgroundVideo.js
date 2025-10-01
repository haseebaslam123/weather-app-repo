import React, { useState, useEffect } from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Local video paths (inside public/videos/)
  const weatherVideos = [
    "/video1.mp4.mp4",
    
  ];

  useEffect(() => {
    // Change video every 30 seconds
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % weatherVideos.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [weatherVideos.length]);

  return (
    <div className="background-video-container">
      {/* Background Video */}
      <video
        key={currentVideo} // re-renders when video changes
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={weatherVideos[currentVideo]} type="video/mp4" />
      </video>

      
      
    </div>
  );
};

export default BackgroundVideo;
