import React from 'react'

export default function AddBook() {
  return (
    <div>
      <button>AddBook</button>
    <form>
    <label for="name">Book title:</label>
    <input type="text" id="name" name="name" required /> 

    <label for="text">Book description:</label>
    <input type="text" id="description" name="description" required />

    </form>
    </div>
    
  )
}
