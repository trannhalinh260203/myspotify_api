import React, { useEffect, useState } from 'react';
import TrackItem from './TrackItem';
import './PlaylistTracks.css'; // Nhập file CSS mới cho PlaylistTracks

const PlaylistTracks = ({ token }) => {
  const [tracks, setTracks] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const playlistId = "54ZA9LXFvvFujmOVWXpHga";

  useEffect(() => {
    if (token) {
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setTracks(data.items || []);
        })
        .catch(error => console.error("Error fetching tracks", error));
    }
  }, [token]);

  const handlePlay = (audioRef, imageUrl) => {
    if (currentAudio && currentAudio !== audioRef) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    
    if (imageUrl) {
      setBackgroundImage(imageUrl);
      setIsPlaying(true);
    } else {
      setBackgroundImage('');
      setIsPlaying(false);
    }

    setCurrentAudio(audioRef);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="track-list">
        {tracks.length > 0 ? (
          tracks.map((item) => (
            <TrackItem key={item.track.id} track={item} onPlay={handlePlay} />
          ))
        ) : (
          <p>No tracks available.</p>
        )}
      </div>
      <style>
        {`
          .background-image {
            background-color: ${isPlaying ? 'transparent' : 'gray'};
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            filter: blur(8px);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.7;
            transition: background-image 0.5s ease, background-color 0.5s ease;
          }
        `}
      </style>
    </div>
  );
};

export default PlaylistTracks;
