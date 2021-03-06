import axios from "axios";
import React, { useState } from "react"

const BookForm = (props) =>{
  const { id, title: initialTitle, author: initialAuthor, publisher: initialPublisher, addBook, updateBook } = props
  const [title, setTitle] = useState(initialTitle ? initialTitle : '')
  const [author, setAuthor] = useState(initialAuthor ? initialAuthor : '')
  const [publisher, setPublisher] = useState(initialPublisher ? initialPublisher : '')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = {title: title, author: author, publisher: publisher};
    if(id) {
      try {
      let response = await axios.put(`/books/${id}`, book);
      updateBook(response.data);
      } catch (err) {
        alert(`${err.response.data.errors[0]}`)
        console.log(err.response.data)
      }
    } else {
      try {
      let response = await axios.post("/books", book);
      addBook(response.data) 
      } catch (err) {
        alert(`${err.response.data.errors[0]}`)
        console.log(err.response.data.errors[0])
      }
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
        <p>Publisher:</p>
        <input value = {publisher} onChange = {(e)=>setPublisher(e.target.value)}/>
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