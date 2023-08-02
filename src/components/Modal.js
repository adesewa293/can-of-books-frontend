import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

export default function BookFormModal({ show, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleAddBook = async () => {
    try {
      const response = await axios.post("https://canob.onrender.com/books", {
        title,
        description,
        status,
        imageURL,
      });

      console.log("New book added:", response.data);

      onClose();
    } catch (error) {
      console.error("Error adding book:", error.message);
    }
  };

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
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button onClick={handleAddBook}>Save Book</button>
        </div>
      </div>
    </div>
  );
}
