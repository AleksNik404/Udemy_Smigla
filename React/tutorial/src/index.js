import * as ReactDOMClient from 'react-dom/client';
import './index.css';

const books = [
  {
    id: 1,
    title: 'Turkey Trouble',
    author: 'by Matthew Perry',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL127_SR127,127_.jpg',
  },
  {
    id: 2,
    title: 'Friends, Lovers, and the Big Terrible Thing',
    author: 'by Wendi Silvano',
    img: 'https://m.media-amazon.com/images/P/B09M1RPWWL.01._SCLZZZZZZZ_SX500_.jpg',
  },
  {
    id: 3,
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'by Bill Martin Jr.',
    img: 'https://m.media-amazon.com/images/P/0805047905.01._SCLZZZZZZZ_SX500_.jpg',
  },
];

export function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  let { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Turkey book" />
      <h3>{title}</h3>
      <p>{author}</p>
    </article>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<BookList />);
