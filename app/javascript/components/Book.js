import React, {useState} from "react"
import BookForm from "./BookForm";

const Book = (props) => {
  const { title, author, publisher, id, deleteBook } = props
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm)
  };
  return(
    <div style = {style.book}>
      <h4>Title: {title}</h4>
      <p>Author: {author}</p>
      <p>Publisher: {publisher}</p>
      <button onClick = {toggleForm}>{showForm ? "Cancel Update" : "Update Book"}</button>
      {showForm && <BookForm {...props}/>}
      <br />
      <button onClick = {()=>deleteBook(id)}>Delete Book</button>
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