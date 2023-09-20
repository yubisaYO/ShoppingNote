/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Header from "./components/Header";

const dummyItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [groceryItems, setGroceryItems] = useState(dummyItems);

  function handleAddItem(item) {
    setGroceryItems([...groceryItems, item]);
  }

  function handleToggleItem(id) {
    setGroceryItems((groceryItems) =>
      groceryItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setGroceryItems((groceryItems) =>
      groceryItems.filter((item) => item.id !== id)
    );

    console.log("delete woi");
    // filtering
  }

  function handleClearItems() {
    setGroceryItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItem} />
      <GroceryList
        groceryItems={groceryItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer groceryItems={groceryItems} />
    </div>
  );
}
