import {React, useState} from 'react'
import BookFormModal from './modal'

export default function AddBook() {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleClose() {
    setIsOpen(true);
  }
  function handleClick(){
    console.log('before', isOpen)
    setIsOpen(true);
    console.log('after', isOpen)
  }
  
  console.log('inside', isOpen)
  return (
    <div>
      <button onClick={handleClick}>AddBook</button>
      <BookFormModal show={isOpen} onClose={handleClose}/>
    </div>
    
  )
}
