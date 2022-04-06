import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { ShelfType } from '../types';

class ListBooks extends Component {
  static propTypes = {
    toggleSearchPage: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }

  filterBooksByShelf = (shelf) => {
    const res = this.props.books.filter((book) => book.shelf === shelf);
    console.log(shelf, res);
    return res;
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf title='Currently Reading' books={this.filterBooksByShelf(ShelfType.CURRENTLY_READING)}/>
          <Bookshelf title='Want to Read' books={this.filterBooksByShelf(ShelfType.WANT_TO_READ)}/>
          <Bookshelf title='Read' books={this.filterBooksByShelf(ShelfType.READ)}/>
        </div>
        <div className="open-search">
          <button onClick={() => this.props.toggleSearchPage(true)}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default ListBooks;