import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BestBook() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("https://canob.onrender.com/books/");
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      bestbook
      {books.length > 0 && books.map((book) => (
        <div>
          <p>{book.title}</p>
          <p>{book.description}</p>
          <p>{book.status}</p>
        </div>
      ))}
    </div>
  );
}
