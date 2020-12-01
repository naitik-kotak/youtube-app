import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className='item video-item'
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className='content'>
        <h4 className='header'>{video.snippet.title}</h4>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
