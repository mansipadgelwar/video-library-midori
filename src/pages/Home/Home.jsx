import "../Home/Home.css";
import { Sidebar, CategoryCard } from "../../components";
import Ballroom from "../../assets/ballroom.jpg";
import Contemprary from "../../assets/contemprary.jpg";
import HipHop from "../../assets/hip-hop.jpg";
import Banner from "../../assets/banner.jpg";

const Home = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <img src={Banner} alt="hero-img" className="img-responsive"/>
          <div className="hero-img-overlay">
            <h3 className="text-bold">Dance to the beat of your dreams</h3>
            <button id="btn-shop-now" className="btn btn-secondary">
              Explore Now
            </button>
          </div>
        </div>

        <p className="home-page-subheading text-bold h3">Must Watch Videos</p>
        <div className="two-box-section">
          <CategoryCard categoryName={"Ballroom"} srcImg={Ballroom}/>
          <CategoryCard categoryName={"Contemprary"} srcImg={Contemprary}/>
          <CategoryCard categoryName={"Hip-Hop"} srcImg={HipHop}/>
        </div>
      </div>
    </div>
  );
};

export { Home };
