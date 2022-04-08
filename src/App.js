import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
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
    books: [],
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
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to={'/mybooks'} />} />
          <Route 
            path='/mybooks' 
            element={
              <ListBooks 
                books={this.state.books} 
              />
            } 
          />
          <Route 
            path='/search' 
            element={
              <SearchBooks 
                shelvedBooks={this.state.books} 
              />
            } 
          />
          <Route
            path="*"
            element={
              <h1>404 Not Found</h1>
            }
          />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default BooksApp
