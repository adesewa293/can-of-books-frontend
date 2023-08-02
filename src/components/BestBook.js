import React, { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "./AddBook";
import "./Modal.css";

export default function BestBook() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("https://canob.onrender.com/books/");
    setBooks(response.data);
  };
 async function handleDelete(id){
  await axios.delete(`https://canob.onrender.com/books/${id}`);
 }
  useEffect(() => {
    getBooks();
  }, []);

getBooks();

  return (
    <div>
      <h1>Best books</h1>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book._id}>
            <b>{book.title}</b>
            <p>{book.description}</p>
            <p>{book.status}</p>
            <button onClick={()=> handleDelete(book._id)}>Delete Book</button>
          </div>
        ))
      ) : (
        <p>The book collection is empty</p>
      )}
      <AddBook />
    </div>
  );
}
