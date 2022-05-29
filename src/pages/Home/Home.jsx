import "../Home/Home.css";
import { Sidebar, CategoryCard } from "../../components";
import { Ballroom, Contemprary, HipHop, Banner } from "../../assets";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <img src={Banner} alt="hero-img" className="img-responsive" />
          <div className="hero-img-overlay">
            <h3 className="text-bold">Dance to the beat of your dreams</h3>
            <Link to="/videolist">
              <button id="btn-shop-now" className="btn btn-secondary">
                Explore Now
              </button>
            </Link>
          </div>
        </div>

        <p className="home-page-subheading text-bold h3">Must Watch Videos</p>
        <div className="two-box-section">
          <CategoryCard categoryName={"Ballroom"} srcImg={Ballroom} />
          <CategoryCard categoryName={"Contemporary"} srcImg={Contemprary} />
          <CategoryCard categoryName={"Hip-hop"} srcImg={HipHop} />
        </div>
      </div>
    </div>
  );
};

export { Home };
