import "../Home/Home.css";
import { CategoryChips, Sidebar, VideoCard } from "../../components";

const Home = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>

      <div className="main-content-page">
        <CategoryChips />
        <div className="hero-img">
          <img src="https://picsum.photos/300/1000" alt="hero-img" />
          <div className="hero-img-overlay">
            <h2>Indoor Plants</h2>
            <h4>Live with Nature</h4>
            <button id="btn-shop-now" className="btn btn-secondary">
              Watch Now
            </button>
          </div>
        </div>

        <p className="home-page-subheading text-bold h3">Must Watch Videos</p>
        <div className="two-box-section">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export { Home };
