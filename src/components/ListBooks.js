import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import { ShelfType } from '../types';

class ListBooks extends Component {
  static propTypes = {
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
          <Link to="/search" className="open-search-button">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;