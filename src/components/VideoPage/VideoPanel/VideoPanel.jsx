import "../css/VideoPage.css";
import { useServices } from "../../../context/servicesContext/servicesContext";
import { useState } from "react/cjs/react.production.min";

const VideoPanel = ({ video }) => {
  const { _id: id, title } = video;  
  const { addVideoToWatchLater, handleLikedVideos, state } = useServices();

  const findCurrentVideo = state.likes.find((item) => item.id === id);
  const isVideoExistsInLiked = findCurrentVideo === undefined ? false : true;

  return (
    <div className="video-panel">
      <div className="video-sub-menus">
        <button className="btn btn-icon" onClick={() => handleLikedVideos({id,title})}>
          <span className={`${isVideoExistsInLiked ? "material-icons" : "material-icons-outlined"}`}>thumb_up</span>
           {isVideoExistsInLiked ? "Liked" : "Like"}         
        </button>
        <button
          className="btn btn-icon"
          onClick={() => addVideoToWatchLater({ id, title })}
        >
          <span className="material-icons-outlined">watch_later</span>
          Add to Watch Later
        </button>
        <button className="btn btn-icon">
          <span className="material-icons-outlined">playlist_add</span>
          Add to Playlist
        </button>
      </div>
      <div className="video-stats">10K views | 13 hours ago</div>
    </div>
  );
};

export { VideoPanel };
