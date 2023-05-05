import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const updateBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) =>
      // if (book.id === id) return { ...book, title: new_title };
      // return book;
      book.id === id ? { ...book, title } : book
    );
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const shareValueContext = {
    books,
    createBook,
    updateBookById,
    deleteBookById,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={shareValueContext}>
      {children}
    </BooksContext.Provider>
  );
};
export { Provider };
export default BooksContext;
