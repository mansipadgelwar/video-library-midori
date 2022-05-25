import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard, Loader } from "../../components";
import { useData } from "../../context/dataContext/dataContext";
import { useEffect } from "react";

const VideoListingPage = () => {
  const { videoLoader, videos, videoDispatch } = useData();
  console.log(videos);

  useEffect(() => {
    videoDispatch({
      type: "DISPLAY_LOADER",
      payload: { videoLoader: true }
    });
    const timeoutInterval = setTimeout(() => {
      videoDispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false }
      });
    }, 1000);
    return () => {
      videoDispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false }
      });
      clearInterval(timeoutInterval);
    };
  }, [videoDispatch]);

  return (
    <div className="main-content-page video-listing-page">
      {videoLoader ? (
        <Loader />
      ) : (
        <div>
          <CategoryChips />

          <div className="menu-bar">
            <div className="page-title h3 text-bold">Trending Videos</div>
          </div>
          <div className="history-video-container">
            {videos.map((video) => {
              return (
                <VideoCard
                  key={video._id}
                  video={video}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { VideoListingPage };
