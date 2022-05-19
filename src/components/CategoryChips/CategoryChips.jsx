import axios from "axios";
import { useEffect, useState } from "react";
import "../CategoryChips/CategoryChips.css";
import { useData } from "../../context/dataContext/dataContext";
import { useToast } from "../../custom-hooks/useToast";

const CategoryChips = ({ categoryName }) => {
  const [categoryType, setCategory] = useState([]);
  const { setClickedCategory } = useData();
  const { showToast } = useToast();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          const data = response.data.categories;
          setCategory(data);
          return data;
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
        <li
          className="chips text-bold active"
          onClick={() => setClickedCategory("All")}
        >
          All
        </li>
        {categoryType.map(({ _id, categoryName }) => {
          return (
            <li
              key={_id}
              className="chips text-bold"
              onClick={() => setClickedCategory(categoryName)}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { CategoryChips };
