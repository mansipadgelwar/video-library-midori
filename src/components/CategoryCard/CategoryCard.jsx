import "../CategoryCard/CategoryCard.css";

const CategoryCard = ({categoryName}) => {
  
  return (
    <div className="category-card-container">
      <div className="category-image">
          <img
            src="https://picsum.photos/300/200"
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
