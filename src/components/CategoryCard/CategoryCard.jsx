import "../CategoryCard/CategoryCard.css";

const CategoryCard = ({categoryName,srcImg}) => {
  
  return (
    <div className="category-card-container">
      <div className="category-image">
          <img
            src={srcImg}
            alt="thumbnail"
            className="video-thumbnail img-responsive"
          />
      </div>
      <div className="video-heading">
         {categoryName}
        </div>
    </div>
  );
};

export { CategoryCard };
