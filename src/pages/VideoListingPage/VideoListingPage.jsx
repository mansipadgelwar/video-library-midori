import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard } from "../../components";

const VideoListingPage = () => {
  return (
    <div className="main-content-page">
      <CategoryChips />
      <div className="menu-bar">
        <div className="page-title h3 text-bold">Trending Videos</div>
      </div>
      <div className="history-video-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export { VideoListingPage };
