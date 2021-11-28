import React, { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";
import BookForm from "./BookForm";


const App = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getBooks();
  },[]);

  const getBooks = async() =>{
    let response = await axios.get("/books");
    setBooks(response.data)
  };

  const toggleNew = () => {
    setShowForm(!showForm)
  };

  const addBook = (book) => {
    setBooks([book,...books]);
  };

  const updateBook = (book)=>{
    let updatedBooks=books.map((b) => (b.id === book.id ? book : b));
    setBooks(updatedBooks)
  };

  const deleteBook = async (id) => {
    // Delete from DB
    let response = await axios.delete(`/books/${id}`);
    let filteredBooks = books.filter((b)=> b.id !== id);
    setBooks(filteredBooks);
  };

  return(
    <div style = {style.app}>
      <h1>Welcome to the Coolest Bookstore in the World!!!</h1>
      <button onClick = {toggleNew}>{showForm ? "Cancel" : "Add Book"}</button>
      {showForm && <BookForm  addBook={addBook}/>}
      <Books books = {books} deleteBook={deleteBook} updateBook={updateBook}/>
    </div>
  );
};

export default App;

const style = {
  app: {
    borderRadius: "15px",
    border: "1px solid black",
    backgroundColor: "lightgray",
    padding: "5px",
    maxWidth: "90%",    
    margin: "auto",
  }
};