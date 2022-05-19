import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../../context/dataContext/dataContext";

const VideoListingPage = () => {
  const [video, setVideo] = useState([]);
  const { clickedCategory } = useData();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      const data = response.data.videos;
      if (clickedCategory !== "All") {
        const filterData = [...data].filter(
          (item) => item.category === clickedCategory
        );
        setVideo(filterData);
        return filterData;
      }
      setVideo(data);
      return data;
    })();
  }, [clickedCategory]);

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
