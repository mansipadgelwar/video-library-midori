import "../Home/Home.css";
import { Sidebar, CategoryCard } from "../../components";

const Home = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <img src="https://picsum.photos/300/1000" alt="hero-img" />
          <div className="hero-img-overlay">
            <h3 className="text-bold">Dance to the beat of your dreams</h3>
            <button id="btn-shop-now" className="btn btn-secondary">
              Explore Now
            </button>
          </div>
        </div>

        <p className="home-page-subheading text-bold h3">Must Watch Videos</p>
        <div className="two-box-section">
          <CategoryCard categoryName={"Ballroom"} />
          <CategoryCard categoryName={"Contemprary"}/>
          <CategoryCard categoryName={"Hip-Hop"}/>
        </div>
      </div>
    </div>
  );
};

export { Home };
