import "../VideoPage/VideoPage.css";
import {
  VideoDescription,
  VideoPanel,
  VideoPlayer,
  VideoCard
} from "../../components";
import { useData } from "../../context/dataContext/dataContext";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { video } = useData();
  const { videoId } = useParams();
  const currentVideo = video.find((item) => item._id === videoId);

  return (
    <div className="video-page-container">
      <div className="video-page">
        <VideoPlayer
          id={currentVideo._id}
          title={currentVideo.title}
          description={currentVideo.description}
        />
        <VideoPanel />
        <VideoDescription description={currentVideo.description} />
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
