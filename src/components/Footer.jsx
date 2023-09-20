export default function Footer({ groceryItems }) {
  if (groceryItems.length == 0) {
    return <footer className="stats">Kamu belum belanja apa-apa nih !</footer>;
  }

  const buyedItems = groceryItems.filter((item) => item.checked);
  return (
    <footer className="stats">
      Ada {groceryItems.length} barang di daftar belanjaan, {buyedItems.length}{" "}
      barang sudah dibeli (
      {Math.floor((buyedItems.length / groceryItems.length) * 100)}%)
    </footer>
  );
}
