import React from 'react';
import TrackItem from './TrackItem';

const TrackList = ({ tracks, onPlay }) => {
  return (
    <div className="track-list">
      {tracks.map(track => (
        <TrackItem key={track.track.id} track={track} onPlay={onPlay} />
      ))}
    </div>
  );
};

export default TrackList;
