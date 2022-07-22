import "../CategoryCard/CategoryCard.css";
import { useData } from "../../context";
import { Link } from "react-router-dom";

const CategoryCard = ({ categoryName, srcImg }) => {
  const { setClickedCategory } = useData();

  return (
    <div className="category-card-container">
      <div className="category-image">
        <img
          src={srcImg}
          alt="thumbnail"
          className="video-thumbnail img-responsive"
        />
      </div>
      <Link to="/videolist">
        <div
          className="video-heading"
          onClick={() => setClickedCategory(categoryName)}
        >
          {categoryName}
        </div>
      </Link>
    </div>
  );
};

export { CategoryCard };
