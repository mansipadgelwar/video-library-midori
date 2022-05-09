import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";

const VideoListingPage = () => {
  const [video, setVideo] = useState([]);

  const getAllVideos = async () => {
    const response = await axios.get("/api/videos");
    const data = response.data.videos;
    setVideo(data);
    return data;
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <div className="main-content-page video-listing-page">
      <CategoryChips />
      <div className="menu-bar">
        <div className="page-title h3 text-bold">Trending Videos</div>
      </div>
      <div className="history-video-container">
        {video.map(({ _id, title, category, url }) => {
          return (
            <VideoCard
              key={_id}
              id={_id}
              title={title}
              category={category}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
};

export { VideoListingPage };
