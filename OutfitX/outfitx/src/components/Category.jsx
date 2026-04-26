import { useState } from "react";

function Category({ setCategory }) {
  const [active, setActive] = useState("all");

  const handleClick = (cat) => {
    setActive(cat);
    setCategory(cat);
  };

  const baseStyle =
    "px-4 py-2 rounded-full text-sm font-medium transition duration-300";

  const activeStyle = "bg-black text-white shadow-lg scale-105";
  const inactiveStyle = "bg-white text-black hover:bg-gray-200";

  return (
    <div className="flex justify-center gap-3 p-4 flex-wrap">

      <button
        onClick={() => handleClick("all")}
        className={`${baseStyle} ${active === "all" ? activeStyle : inactiveStyle}`}
      >
        All
      </button>

      <button
        onClick={() => handleClick("men")}
        className={`${baseStyle} ${active === "men" ? activeStyle : inactiveStyle}`}
      >
        👕 Men
      </button>

      <button
        onClick={() => handleClick("women")}
        className={`${baseStyle} ${active === "women" ? activeStyle : inactiveStyle}`}
      >
        👗 Women
      </button>

      <button
        onClick={() => handleClick("boys")}
        className={`${baseStyle} ${active === "boys" ? activeStyle : inactiveStyle}`}
      >
        👦 Boys
      </button>

      <button
        onClick={() => handleClick("girls")}
        className={`${baseStyle} ${active === "girls" ? activeStyle : inactiveStyle}`}
      >
        👧 Girls
      </button>

    </div>
  );
}

export default Category;