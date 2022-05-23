import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard, Loader } from "../../components";
import { useData } from "../../context/dataContext/dataContext";
import { useServices } from "../../context/servicesContext/servicesContext";
import { useEffect } from "react";

const VideoListingPage = () => {
  const { videoLoader, video } = useData();
  const { dispatch } = useServices();

  useEffect(() => {
    dispatch({
      type: "DISPLAY_LOADER",
      payload: { videoLoader: true }
    });
    const timeoutInterval = setTimeout(() => {
      dispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false }
      });
    }, 2000);
    return () => {
      dispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false }
      });
      clearInterval(timeoutInterval);
    };
  });

  return (
    <div className="main-content-page video-listing-page">
      {videoLoader || categoryLoader ? (
        <Loader />
      ) : (
        <div>
          <CategoryChips />
          <div className="menu-bar">
            <div className="page-title h3 text-bold">Trending Videos</div>
          </div>
          <div className="history-video-container">
            {video.map(({ _id, title, category }) => {
              return (
                <VideoCard
                  key={_id}
                  id={_id}
                  title={title}
                  category={category}
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
