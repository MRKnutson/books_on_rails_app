import React from "react"
import BookForm from "./BookForm";

const Book = (props) => {
  const { title, author, id, deleteBook } = props
  return(
    <div style = {style.book}>
      <h4>Title: {title}</h4>
      <p>Author: {author}</p>
      <button onClick = {()=>deleteBook(id)}>Delete Book</button>
      <BookForm {...props}/>
    </div>
  );
};

export default Book;

const style = {
  book: {
    borderRadius: "25px",
    border: "1px solid blue",
    backgroundColor: "lightblue",
    margin: "10px",
    padding: "10px",
  },
};