import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import BookAppProvider from './AppProvider';

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route 
            exact path='/' 
            element={
              <BookAppProvider>
                <ListBooks />
              </BookAppProvider>
            } 
          />
          <Route 
            path='/search' 
            element={
              <BookAppProvider>
                <SearchBooks />
              </BookAppProvider>
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
