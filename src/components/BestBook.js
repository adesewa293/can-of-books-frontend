import React, { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "./AddBook";
import "./Modal.css";

export default function BestBook() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState(null);

  const getBooks = async () => {
    const response = await axios.get("https://canob.onrender.com/books/");
    setBooks(response.data);
  };

  async function handleDelete(id) {
    const response = await axios.delete(
      `https://canob.onrender.com/books/${id}`
    );
    setMessage(response.data.message);
    getBooks();
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h1>Best books</h1>
      <div className="best-book">
        <i>{message}</i>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id}>
              <b>{book.title}</b>
              <img src={book.imageUrl} alt={book.title} />
              <p>{book.description}</p>
              <p>{book.status}</p>
              <button onClick={() => handleDelete(book._id)}>
                Delete Book
              </button>
            </div>
          ))
        ) : (
          <p>The book collection is empty</p>
        )}
      </div>
      <AddBook />
    </div>
  );
}
