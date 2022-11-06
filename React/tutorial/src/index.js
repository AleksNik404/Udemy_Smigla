// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import * as ReactDOMClient from 'react-dom/client';
import './index.css';

export function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL127_SR127,127_.jpg"
    alt="Turkey book"
  />
);
const Title = () => <h3>Turkey Trouble</h3>;
const Author = () => <p>by Wendi Silvano</p>;

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<BookList />);
