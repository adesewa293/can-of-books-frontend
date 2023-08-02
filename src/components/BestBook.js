import React, { useState, useEffect } from "react";
import axios from "axios";
import BookFormModal from "./Modal";

export default function BestBook() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState(null);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

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

  function handleEdit(book) {
    setBookToEdit(book);
    handleOpenModal(true);
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
            <div key={book._id} className="book-entry">
              <h2>{book.title}</h2>
              <img
                className="book-cover"
                src={book.imageUrl}
                alt={book.title}
              />
              <div>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </div>
              <button
                onClick={() => handleDelete(book._id)}
                className="delete-button"
              >
                Delete Book
              </button>
              <button onClick={() => handleEdit(book)}>Edit Book</button>
            </div>
          ))
        ) : (
          <p>The book collection is empty</p>
        )}
      </div>
      <div>
        <button onClick={handleOpenModal}>AddBook</button>
       <BookFormModal
          book={bookToEdit}
          show={isOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
