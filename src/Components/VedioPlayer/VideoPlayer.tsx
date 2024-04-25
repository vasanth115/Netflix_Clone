import './VedioPlayer.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPlayer = ({ source }: TypeProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!source) {
      navigate('/loading');
    }
  }, [source]); 

  return (
    <div>
      <video className="background-vedio" loop controls >
        <source src={source} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;

type TypeProps = {
  source: string;
};
