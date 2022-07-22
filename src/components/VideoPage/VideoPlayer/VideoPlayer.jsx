import "../css/VideoPage.css";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ id, title }) => {
  return (
    <div className="video-player-container">
      <div className="h3">{title}</div>
      <div className="video-player">
        <ReactPlayer
          url={`https://youtu.be/${id}`}
          width="100%"
          height="28rem"
          controls={true}
        />
      </div>
    </div>
  );
};

export { VideoPlayer };
