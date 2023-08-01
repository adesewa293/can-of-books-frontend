import React from 'react'

export default function AddBook() {
  return (
    <div>
      <button>AddBook</button>
    <form>
    <label htmlFor="name">Book title:</label>
    <input type="text" id="name" name="name" required /> 

    <label htmlFor="text">Book description:</label>
    <input type="text" id="description" name="description" required />

    </form>
    </div>
    
  )
}
