import { React, useState } from "react";
import BookFormModal from "./modal";

export default function AddBook() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }
  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div>
      <button onClick={handleClick}>AddBook</button>
      <BookFormModal show={isOpen} onClose={handleClose} />
    </div>
  );
}
