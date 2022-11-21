import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItmes, setMenuItmes] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItmes(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);

    setMenuItmes(newItems);
  };

  return (
    <menu>
      <section className="memu section">
        <div className="title">
          <h2 className="">our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItmes} />
      </section>
    </menu>
  );
}

export default App;
