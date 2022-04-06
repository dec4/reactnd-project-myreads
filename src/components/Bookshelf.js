import React, { Component } from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
  }

  render() {
    const { title, books } = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <BookItem
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    image={book.imageLinks.smallThumbnail}
                    shelf={book.shelf}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf;