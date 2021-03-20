import React from "react";

function Filter({ onCategoryChange, onSearchChange, infoObj }) {
  return (
    <div className="Filter">
      <input name="searchTexts" onChange={onSearchChange} value={infoObj.searchTexts} type="text" placeholder="Search..." />
      <select name="selectedCategorys" onChange={onCategoryChange} value={infoObj.selectedCategorys}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
