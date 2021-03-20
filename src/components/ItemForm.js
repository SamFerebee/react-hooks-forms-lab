import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({item, changeCallback, submitCallback}) {
  return (
    <form className="NewItem" onSubmit={submitCallback}>
      <label>
        Name:
        <input type="text" name="name" value={item.item} onChange={changeCallback} />
      </label>

      <label>
        Category:
        <select name="category" value={item.category} onChange={changeCallback}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
