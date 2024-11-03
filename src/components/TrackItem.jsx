import React, { useState, useRef } from 'react';
import Img from './img';
import Button from './button';
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
    <div className="track-item"> {/* Thêm class này */}
      <Img src={track.track.album.images[0].url} alt={`${track.track.name} album cover`} />
      <div className="track-info">
        <p style={{ fontWeight: 'bold', margin: '0' }}>{track.track.name.length > 40 ? `${track.track.name.substring(0, 40)}...` : track.track.name}</p>
        <p style={{ margin: '0' }}>{track.track.artists.map(artist => artist.name).join(', ')}</p>
      </div>
      <Button isPlaying={isPlaying} onClick={handlePlayPause} />
      <audio ref={audioRef} src={track.track.preview_url} />
    </div>
);

};

export default TrackItem;
