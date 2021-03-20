import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [infoObj, setInfoObj] = useState({
    selectedCategorys: "All",
    searchTexts: ""
  })
  const [itemToAdd, setItemToAdd] = useState({
    category: "Produce",
    name: ""
  })
  const [submitted, setSubmitted] = useState(false)

  function handleCategoryChange(event) {
    const key = event.target.name
    const val = event.target.value
    const temp = {...infoObj, [key]: val}
    setInfoObj(temp);
  }

  const itemsToDisplay = items.filter((item) => {
    if (infoObj.selectedCategorys === "All") return true;

    return item.category === infoObj.selectedCategorys;
  });

  const filteredItemsDisplay = itemsToDisplay.filter((item) => {
    if (infoObj.searchTexts === "") return true;

    return item.name.includes(infoObj.searchTexts);
  })
  const handleSearchChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    const temp = {...infoObj, [key]: val};
    setInfoObj(temp);
  }

  const handleItemAdd = e => {
    const key = e.target.name;
    const val = e.target.value;
    const temp = {...itemToAdd, [key]: val}
    setItemToAdd(temp);
  }

  const onItemFormSubmit = e => {
    e.preventDefault();
    const toAdd = {
      id: items.length,
      ...itemToAdd
    }
    items.push(toAdd)
    setSubmitted((s)=>!s)
  }

  return (
    <div className="ShoppingList">
      <ItemForm item={itemToAdd} changeCallback={handleItemAdd} submitCallback={onItemFormSubmit}/>
      <Filter infoObj={infoObj} onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} />
      <ul className="Items">
        {filteredItemsDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
