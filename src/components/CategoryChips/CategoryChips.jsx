import axios from "axios";
import { useEffect, useState } from "react";
import "../CategoryChips/CategoryChips.css";
import { useData } from "../../context/dataContext/dataContext";
import { useToast } from "../../custom-hooks/useToast";

const CategoryChips = () => {
  const [categoryType, setCategory] = useState([]);
  const { clickedCategory, setClickedCategory } = useData();
  const { showToast } = useToast();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          const {
            data: { categories },
          } = response;
          setCategory(categories);
          return categories;
        }
      } catch (error) {
        showToast(`Error fetching categories`, "error");
        console.error("error in getting categories", error);
      }
    })();
  }, [showToast]);

  return (
    <div className="chips-container">
      <ul className="chips-list">
        <button
          className={`chips text-bold ${
            clickedCategory === "All" ? "active" : ""
          }`}
          onClick={() => setClickedCategory("All")}
        >
          All
        </button>
        {categoryType.map(({ _id, categoryName }) => {
          return (
            <button
              key={_id}
              className={`chips text-bold ${
                clickedCategory === categoryName ? "active" : ""
              }`}
              onClick={(e) => setClickedCategory(categoryName)}
            >
              {categoryName}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export { CategoryChips };
