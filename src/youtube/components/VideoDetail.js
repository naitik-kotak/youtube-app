import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  return (
    <div className='ui segment'>
      <div className='ui embed'>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
        ></iframe>
      </div>
      <div className='ui segment'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
