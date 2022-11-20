import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItmes, setMenuItmes] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <menu>
      <section className="memu section">
        <div className="title">
          <h2 className="">our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItmes} />
      </section>
    </menu>
  );
}

export default App;
