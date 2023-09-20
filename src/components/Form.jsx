import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ onAddItems }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const optNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      checked: false,
    };
    onAddItems(newItem);
    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {optNum}
      </select>
      <input
        type="text"
        placeholder="nama barang..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Tambah</button>
    </form>
  );
}
