import "../css/VideoPage.css";

const VideoPlayer = ({ id, title }) => {
  return (
    <div>
      <div className="h3">{title}</div>
      <div className="video-player">
        <img
          src="https://picsum.photos/850/450"
          alt="video-thumbnail"
          href="/"
        />
      </div>
    </div>
  );
};

export { VideoPlayer };
