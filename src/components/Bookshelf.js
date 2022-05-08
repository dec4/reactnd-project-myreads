import React, { Component } from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

// TODO: Suggestion from Udacity reviewer
// Prefer using a functional component over class component
// when a component does not have its own state. In fact, 
// after the introduction of Hooks, we can use a functional 
// component in almost all cases. 
// React Hooks: https://reactjs.org/docs/hooks-intro.html

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
                  <BookItem book={book} />
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