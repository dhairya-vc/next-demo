import { useSelector, useDispatch } from "react-redux";

import { SIDEBAR_WIDTH, CATEGORIES } from "../../config";
import { getCategory, setCategory } from "../../redux/slice/globalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(getCategory);

  const hoverClass =
    "hover:text-blue-500 hover:bg-blue-100 hover:rounded-r-full hover:font-medium";
  const categoryClass = (category) =>
    category === currentCategory
      ? "text-blue-500 bg-blue-100 rounded-r-full font-medium"
      : "text-gray-600";

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <aside style={{ minWidth: SIDEBAR_WIDTH }} className="fixed py-4">
      <nav>
        <ul>
          <li
            className={`capitalize text-xl pl-8 py-1.5 cursor-pointer mb-1 ${categoryClass(
              "headlines",
            )} ${hoverClass}`}
            onClick={() => handleCategoryClick("headlines")}
          >
            Top Headlines
          </li>
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className={`capitalize text-xl pl-8 py-1.5 cursor-pointer mb-1 ${categoryClass(
                category,
              )} ${hoverClass}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
