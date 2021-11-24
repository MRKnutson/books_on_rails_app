import React from "react"
import Book from "./Book";

const Books = (props)=>{
  const { books } = props
  return (
    <div>
      <h3>Available Books:</h3>
      {books.map((book) => (
        <Book key = {book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;