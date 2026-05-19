import { useState, useEffect } from "react";
import CustomFetch from "../CustomFetch/CustomFetch";

const Categories = () => {
  const data = CustomFetch("categoris");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (data) {
      const withActive = data.map((item, index) => ({
        ...item,
        active: index === 0,
      }));

      setCategory(withActive);
    }
  }, [data]);

  const handleTab = (id) => {
    const updated = category.map((item) => ({
      ...item,
      active: item.id === id,
    }));

    setCategory(updated);
  };

  return (
    <div
      role="tablist"
      className="py-5 flex flex-col gap-4 lg:px-30 bg-[#F8FAFC]
    bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.18),transparent_20%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(244,114,182,0.12),transparent_20%)]"
    >
      <h1 className="text-2xl font-bold px-4 md:px-6">Browse by categories</h1>

      <div className="overflow-x-auto px-4 md:px-6">
        <div className="tabs tabs-box inline-flex flex-nowrap">
          {category?.map((item) => (
            <a
              key={item.id}
              role="tab"
              onClick={() => handleTab(item.id)}
              className={`tab whitespace-nowrap ${
                item.active ? "tab-active" : ""
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
