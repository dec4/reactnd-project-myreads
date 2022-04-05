import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  static propTypes = {
    toggleSearchPage: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf />
        </div>
        <div className="open-search">
          <button onClick={() => this.props.toggleSearchPage(true)}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default ListBooks;