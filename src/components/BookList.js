import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/book-context-hook";

const BookList = () => {
  const {books} = useBooksContext();
  const listItems = books.map((book) => (
    <BookShow  book={book} />
  ));

  return (
    <div className="list-books">
      <h3>Reading List Book</h3>
      {listItems}
    </div>
  );
};

export default BookList;
