import React, { useState,useEffect } from "react";
import axios from "axios";

export default function BestBooks() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("https://canob.onrender.com/books/");
    console.log(response.data)
    setBooks(response.data)
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      bestbooks
      {books.map((book) => (
        <p>{book.name}</p>
      ))}
    </div>
  );
}
