import "../VideoPage/VideoPage.css";
import {
  VideoDescription,
  VideoPanel,
  VideoPlayer,
  VideoCard,
  Sidebar,
} from "../../components";
import { useData } from "../../context";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videos } = useData();
  const { videoId } = useParams();

  const currentVideo = videos.find((item) => item._id === videoId);
  const currentVideoCategory = videos.filter(
    (video) => video.category === currentVideo.category
  );

  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>
      <div className="video-page-container">
        <div className="video-page">
          <VideoPlayer id={currentVideo._id} title={currentVideo.title} />
          <VideoPanel video={currentVideo} />
          <VideoDescription description={currentVideo.description} />
        </div>

        <div className="video-page-sidebar mobile-hide">
          <div className="h3">Must Watch</div>
          {currentVideoCategory.map(({ _id, title }) => {
            return <VideoCard key={_id} id={_id} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { VideoPage };
