import React from "react"

const Book = (props) => {
  const { book } = props
  return(
    <div style = {style.book}>
      <h4>Title: {book.title}</h4>
      <p>Author: {book.author}</p>
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