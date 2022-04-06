import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  }

  toggleSearchPage = (b) => {
    this.setState({ showSearchPage: b });
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({books}));
        console.log(books);
      });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks shelvedBooks={this.state.books} toggleSearchPage={this.toggleSearchPage} />
        ) : (
          <ListBooks books={this.state.books} toggleSearchPage={this.toggleSearchPage} />
        )}
      </div>
    )
  }
}

export default BooksApp
