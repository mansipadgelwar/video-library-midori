import "../VideoPage/VideoPage.css";
import {
  VideoDescription,
  VideoPanel,
  VideoPlayer,
  VideoCard,
  Loader,
} from "../../components";
import { useData } from "../../context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const VideoPage = () => {
  const { videoLoader, videos, videoDispatch } = useData();
  const { videoId } = useParams();

  const currentVideo = videos.find((item) => item._id === videoId);
  const currentVideoCategory = videos.filter(
    (video) => video.category === currentVideo.category && video._id !== videoId
  );

  useEffect(() => {
    videoDispatch({
      type: "DISPLAY_LOADER",
      payload: { videoLoader: true },
    });
    const timeoutInterval = setTimeout(() => {
      videoDispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false },
      });
    }, 1000);
    return () => {
      videoDispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false },
      });
      clearInterval(timeoutInterval);
    };
  }, [videoDispatch]);

  return (
    <div className="library-home-page">
      <div className="video-page-container">
        {videoLoader ? (
          <Loader />
        ) : (
          <>
            <div className="video-page">
              <VideoPlayer id={currentVideo._id} title={currentVideo.title} />
              <VideoPanel video={currentVideo} />
              <VideoDescription description={currentVideo.description} />
            </div>

            <div className="video-page-sidebar mobile-hide">
              <div className="h3">Must Watch</div>
              {currentVideoCategory &&
                currentVideoCategory.map(({ _id, title }) => {
                  return <VideoCard key={_id} id={_id} title={title} />;
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { VideoPage };
