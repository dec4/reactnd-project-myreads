import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import * as BooksAPI from '../BooksAPI';
import { ShelfType } from '../types';

class SearchBooks extends Component {
  static propTypes = {
    toggleSearchPage: PropTypes.func.isRequired,
    shelvedBooks: PropTypes.array.isRequired,
  }

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
    const { toggleSearchPage, shelvedBooks } = this.props
    const { query, searchResults } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => toggleSearchPage(false)}>Close</button>
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
            <div className='results-count'>
              {/* TODO: styling */}
              <span>Now showing {searchResults.length} search results</span>
              <button onClick={this.clearQuery}>Clear Search</button>
            </div>
          )}
          <ol className="books-grid">
            {searchResults.map((book) => {
              const match = shelvedBooks.filter((b) => b.id === book.id)[0];
              return (
                <li key={book.id}>
                  <BookItem
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    image={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                    shelf={match ? match.shelf : ShelfType.NONE}
                  />
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