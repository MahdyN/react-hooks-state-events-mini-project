import React from "react";

function CategoryFilter({categories, handleFilter, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button className = {category === selectedCategory ? "selected" : ""} key = {category} onClick ={() => handleFilter(category) }>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
