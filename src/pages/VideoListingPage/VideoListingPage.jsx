import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard } from "../../components";
import { useData } from "../../context/dataContext/dataContext";
import { useEffect } from "react";

const VideoListingPage = () => {
  const { video, getAllVideosFromDatabase } = useData();

  useEffect(() => {
    getAllVideosFromDatabase();
  }, [getAllVideosFromDatabase]);

  return (
    <div className="main-content-page video-listing-page">
      <CategoryChips />
      <div className="menu-bar">
        <div className="page-title h3 text-bold">Trending Videos</div>
      </div>
      <div className="history-video-container">
        {video.map(({ _id, title, category }) => {
          return (
            <VideoCard key={_id} id={_id} title={title} category={category} />
          );
        })}
      </div>
    </div>
  );
};

export { VideoListingPage };
