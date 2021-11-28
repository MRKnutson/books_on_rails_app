import React from "react"
import Book from "./Book";

const Books = (props)=>{
  const { books, deleteBook, updateBook } = props
  return (
    <div>
      <h3>Available Books:</h3>
      {books.map((book) => (
        <Book key = {book.id} {...book} updateBook={updateBook} deleteBook={deleteBook}/>
      ))}
    </div>
  );
};

export default Books;