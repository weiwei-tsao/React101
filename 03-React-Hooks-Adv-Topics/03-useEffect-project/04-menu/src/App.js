import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const tmp = ['all', ...new Set(items.map((item) => item.category))]; // spread operator + Set

function App() {

  // const tmp = ['all'];

  // items.forEach((item) => {
  //   if (tmp.indexOf(item.category) === -1) {
  //     tmp.push(item.category);
  //   }
  // });
  // // console.log(tmp);

  const [cates, setCates] = useState(tmp);
  const [filteredItems, setFilteredItems] = useState(items);

  // const clickHandler = (e) => {
  //   if (e.currentTarget.textContent === 'all') {
  //     setFilteredItems(items);
  //   } else {
  //     const newItems = items.filter((item) => item.category === e.currentTarget.textContent);
  //     setFilteredItems(newItems);
  //   }
  // }
  const clickHandler = (cate) => {
    if (cate === 'all') {
      setFilteredItems(items);
    } else {
      const newItems = items.filter((item) => item.category === cate);
      setFilteredItems(newItems);
    }
  }


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories cates={cates} clickHandler={clickHandler}></Categories>

        <Menu filteredItems={filteredItems}></Menu>

      </section>
    </main>
  );
}

export default App;
