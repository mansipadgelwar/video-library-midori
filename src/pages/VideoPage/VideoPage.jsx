import "../VideoPage/VideoPage.css";
import {
  VideoDescription,
  VideoPanel,
  VideoPlayer,
  VideoCard
} from "../../components";

const VideoPage = () => {
  return (
    <div className="video-page-container">
      <div className="video-page">
        <VideoPlayer />
        <VideoPanel />
        <VideoDescription />
      </div>

      <div className="video-page-sidebar">
        <div className="h3">Must Watch</div>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export { VideoPage };
