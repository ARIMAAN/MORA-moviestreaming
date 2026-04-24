import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { useState } from 'react';
import './StreamMovie.css';

const StreamMovie = () => {
  const { yt_id } = useParams();
  const [error, setError] = useState(null);

  if (!yt_id) return <div className="react-player-container">No video selected</div>;

  const url = `https://www.youtube.com/watch?v=${yt_id}`;

  const config = {
    youtube: {
      playerVars: {
        rel: 0,
        modestbranding: 1,
        controls: 1,
        iv_load_policy: 3,
        origin: typeof window !== 'undefined' ? window.location.origin : undefined,
      },
    },
  };

  return (
    <div className="react-player-container">
      {error && <div className="alert alert-danger">Error loading video</div>}
      <ReactPlayer
        url={url}
        controls={true}
        playing={true}
        width="100%"
        height="100%"
        config={config}
        onError={(e) => {
          console.error('ReactPlayer error:', e);
          setError(e);
        }}
        light={`https://img.youtube.com/vi/${yt_id}/maxresdefault.jpg`}
      />
    </div>
  );
};

export default StreamMovie;