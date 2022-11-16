import { SIDEBAR_WIDTH, CATEGORIES } from "../../config";

const Sidebar = () => {
  // TODO: change active class condition
  const hoverClass =
    "hover:text-blue-500 hover:bg-blue-100 hover:rounded-r-full hover:font-medium";
  // eslint-disable-next-line no-constant-condition
  const categoryClass = false ? hoverClass : "text-gray-600";

  return (
    <aside style={{ minWidth: SIDEBAR_WIDTH }} className="fixed py-4">
      <nav>
        <ul>
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className={`capitalize text-xl pl-8 py-1.5 cursor-pointer mb-1 ${categoryClass} ${hoverClass}`}
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
