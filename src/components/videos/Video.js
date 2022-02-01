import React from 'react';
import { AiFillEye } from 'react-icons/ai';

const Video = () => {
  return (
    <div className={'video'}>
      <div className={'video-top'}>
        <img
          src='https://i.ytimg.com/vi/SsMn8tT3ZBQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaVOVnciDEhaBEoITBF-R1tsHQXQ'
          alt=''
        />
        <span>05:45</span>
      </div>
      <div className={'video-title'}>
        Create app in 5 minutes with Roshan using ReactJS
      </div>
      <div className={'video-details'}>
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className={'video-channel'}>
        <img
          src='https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj-mo'
          alt=''
        />
        <p>Coding Ninja</p>
      </div>
    </div>
  );
};

export default Video;
