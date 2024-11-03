// src/components/TrackItem.jsx
import React, { useState, useRef } from 'react';
import Img from './img';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import './TrackItem.css';

const TrackItem = ({ track, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      onPlay(null, ''); // Quay về nền màu xám
    } else {
      onPlay(audioRef.current, track.track.album.images[0].url);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="track-item">
      <Img src={track.track.album.images[0].url} alt={`${track.track.name} album cover`} />
      <div className="track-info">
        <p style={{ fontWeight: 'bold', margin: '0' }}>{track.track.name}</p>
        <p style={{ margin: '0' }}>{track.track.artists.map(artist => artist.name).join(', ')}</p>

        <IconButton onClick={handlePlayPause} className="play-pause-button">
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </div>
      <audio ref={audioRef} src={track.track.preview_url} />
    </div>
  );
};

export default TrackItem;
