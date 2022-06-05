import React from "react";

const Categories = ({ cates, setSelectedCate }) => {
  const handleClick = (selectedCate) => {
    setSelectedCate(selectedCate);
  };
  return (
    <div className="btn-container">
      {cates.map((cate, index) => {
        return (
          <button
            key={`${cate}-${index}`}
            type="button"
            className="filter-btn"
            onClick={() => handleClick(cate)}
          >
            {cate}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
