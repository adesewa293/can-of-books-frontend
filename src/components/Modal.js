import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Modal.css";

export default function BookFormModal({ show, onClose, book }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setDescription(book.description);
      setStatus(book.status);
      setImageUrl(book.imageUrl);
    }
  }, [book]);

  const handleAddBook = async () => {
    try {
      const response = await axios.post("https://canob.onrender.com/books", {
        title,
        description,
        status,
        imageUrl,
      });

      console.log("New book added:", response.data);

      onClose();
    } catch (error) {
      console.error("Error adding book:", error.message);
    }
  };

  const handleEditBook = async () => {
    try {
      const response = await axios.put(
        `https://canob.onrender.com/books/${book._id}`,
        {
          title,
          description,
          status,
          imageUrl,
        }
      );

      console.log("New book added:", response.data);

      onClose();
    } catch (error) {
      console.error("Error adding book:", error.message);
    }
  };

  function handleSave() {
    if (book) {
      handleEditBook();
    } else {
      handleAddBook();
    }
  }
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>New Book Form</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSave}>Save Book</button>
        </div>
      </div>
    </div>
  );
}
