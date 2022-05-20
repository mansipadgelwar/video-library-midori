import "../css/VideoPage.css";

const VideoDescription = ({ description }) => {
  return (
    <div className="video-description">
      <div className="video-heading text-bold h4">Description</div>
      <div className="video-sub-heading">{description}</div>
    </div>
  );
};

export { VideoDescription };
