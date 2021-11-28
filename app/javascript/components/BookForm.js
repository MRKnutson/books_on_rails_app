import axios from "axios";
import React, { useState } from "react"

const BookForm = (props) =>{
  const { id, title: initialTitle, author: initialAuthor, addBook, updateBook } = props
  const [title, setTitle] = useState(initialTitle ? initialTitle : '')
  const [author, setAuthor] = useState(initialAuthor ? initialAuthor : '')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = {title: title, author: author};
    if(id) {
      let response = await axios.put(`/books/${id}`, book);
      updateBook(response.data)
    } else {
      let response = await axios.post("/books", book);
      addBook(response.data) 
    };
  };

  return(
    <div>
      <h2>{id ? "Edit" : "New"} Book Form:</h2>
      <form onSubmit = {handleSubmit} style = { style.form}>
        <p>Title:</p>
        <input value = {title} onChange = {(e)=>setTitle(e.target.value)}/>
        <p>Author:</p>
        <input value = {author} onChange = {(e)=>setAuthor(e.target.value)}/>
        <br />
        <button style = {style.button}>{id ? "Submit Edits" : "Submit Book"}</button>
      </form>
    </div>
  );
};

export default BookForm;

const style = {
  form: {
    border: "2px solid black",
    borderRadius: "25px",
    margin: "10px",
    padding: "10px",
    maxWidth: "50%",
    backgroundColor: "blue",
    color: "white"
  },
  button: {
    marginTop: "10px",
  }
}