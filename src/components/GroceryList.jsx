/* eslint-disable react/prop-types */
import { useState } from "react";
import GroceryItem from "./GroceryItem";

export default function GroceryList({
  groceryItems,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = groceryItems;
      break;
    case "name":
      sortedItems = groceryItems
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = groceryItems.slice().sort((a, b) => a.checked - b.checked);
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item, i) => (
            <GroceryItem
              key={i}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
