import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import { ShelfType } from '../types';
import BookAppContext from '../AppContext';

class ListBooks extends Component {
  static contextType = BookAppContext;

  filterBooksByShelf = (shelf) => {
    const res = this.context.books.filter((book) => book.shelf === shelf);
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
          <Link to="/search" className="open-search-button">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;