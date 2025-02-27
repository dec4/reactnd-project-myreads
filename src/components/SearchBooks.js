import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import * as BooksAPI from '../BooksAPI';
import { ShelfType } from '../types';
import BookAppContext from '../AppContext';

class SearchBooks extends Component {
  static contextType = BookAppContext;

  state = {
    query: "",
    searchResults: [],
  }

  search = (query) => {
    /*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */
    if (query !== "") {
      try {
        BooksAPI.search(query).then((res) => {
          this.setState(() => ({
            searchResults: res.length > 0 ? res : [],
          }));
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState(() => ({
        searchResults: [],
      }));
    }
  }

  updateQuery = (val) => {
    this.setState(() => ({
      query: val,
    }));
    this.search(val);
  }

  clearQuery = () => {
    this.setState(() => ({
      query: "",
      searchResults: [],
    }));
  }

  render() {
    const { books: shelvedBooks } = this.context
    const { query, searchResults } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={query} 
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          {query !== "" && (
            <div className='search-results-count'>
              <span className='light-text'>(Now showing {searchResults.length} results)</span>
            </div>
          )}
          <ol className="books-grid">
            {searchResults.map((book) => {
              const match = shelvedBooks.filter((b) => b.id === book.id)[0];
              book.shelf = match ? match.shelf : ShelfType.NONE;
              return (
                <li key={book.id}>
                  <BookItem book={book} />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;