import axios from "axios";
import { useEffect, useState } from "react";
import "../CategoryChips/CategoryChips.css";

const CategoryChips = () => {
  const [categoryType, setCategory] = useState([]);

  const getListOfCategories = async () => {
    const response = await axios.get("/api/categories");
    const data = response.data.categories;
    setCategory(data);
    return data;
  };

  useEffect(() => {
    getListOfCategories();
  }, []);

  return (
    <div className="chips-container">
      <ul className="chips-list">
        <li className="chips text-bold active">All</li>
        {categoryType.map(({ _id, categoryName }) => {
          return (
            <li key={_id} className="chips text-bold">
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { CategoryChips };
