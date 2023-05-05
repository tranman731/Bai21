import React, { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./style.css";
import useBooksContext from "./hooks/book-context-hook";

const App = () => {
  const { fetchBooks } = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
