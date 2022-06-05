import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [selectedCate, setSelectedCate] = useState("all");
  const [selectedItems, setSelectedItems] = useState(items);

  // only get unique categories
  const cates = ["all", ...new Set(items.map((item) => item.category))];

  React.useEffect(() => {
    if (selectedCate === "all") {
      setSelectedItems(items);
    } else {
      setSelectedItems(items.filter((item) => item.category === selectedCate));
    }
  }, [items, selectedCate]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories cates={cates} setSelectedCate={setSelectedCate} />
        <Menu selectedItems={selectedItems} />
      </section>
    </main>
  );
}

export default App;
