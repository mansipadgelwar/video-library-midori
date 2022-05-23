import "../VideoPage/VideoPage.css";
import {
  VideoDescription,
  VideoPanel,
  VideoPlayer,
  VideoCard
} from "../../components";
import { useToast } from "../../custom-hooks/useToast";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useData } from "../../context/dataContext/dataContext";
import { useParams } from "react-router-dom";
import { addVideoToHistoryOfUserService } from "../../services";
import { useEffect } from "react";
import { useServices } from "../../context/servicesContext/servicesContext";

const VideoPage = () => {
  const { videos } = useData();
  const { videoId } = useParams();
  const { showToast } = useToast();
  const { isAuthorized, authToken } = useAuth();
  const { dispatch } = useServices();

  const currentVideo = videos.find((item) => item._id === videoId);
  const currentVideoCategory = videos.filter(
    (video) => video.category === currentVideo.category
  );

  const addViewedVideoToHistory = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { history }
        } = await addVideoToHistoryOfUserService(authToken, currentVideo);
        dispatch({ type: "MANAGE_HISTORY", payload: history });
        showToast(" Video added to history", "success");
      } catch (error) {
        showToast("Unable to add video to your history", "error");
      }
    }
  };

  useEffect(() => {
    if (currentVideo) addViewedVideoToHistory();
  }, [currentVideo]);

  return (
    <div className="video-page-container">
      <div className="video-page">
        <VideoPlayer id={currentVideo._id} title={currentVideo.title} />
        <VideoPanel video={currentVideo} />
        <VideoDescription description={currentVideo.description} />
      </div>

      <div className="video-page-sidebar">
        <div className="h3">Must Watch</div>
        {currentVideoCategory.map(({ _id, title }) => {
          return <VideoCard key={_id} id={_id} title={title} />;
        })}
      </div>
    </div>
  );
};

export { VideoPage };
