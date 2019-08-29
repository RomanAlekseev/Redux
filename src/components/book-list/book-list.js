import React, { Component } from "react";
import BookListItem from "../book-llist-item";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import compose from "../../utils";

class BookList extends Component {
  componentDidMount() {
    //1. Recicve data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    //.2 dispatch action
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const MapStateToProps = ({ books }) => {
  return {
    books
  };
};

const MapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(
    MapStateToProps,
    MapDispatchToProps
  )
)(BookList);
