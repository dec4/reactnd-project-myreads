import React, { Component } from 'react';
import BookAppContext from './AppContext';
import * as BooksAPI from './BooksAPI';

class BookAppProvider extends Component {
    state = {
        books: []
    }

    componentDidMount() {
      this.getAllBooks();
    }

    getAllBooks = () => {
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({books}));
          console.log(books);
        });
    }

    updateShelf = (id, newShelf) => {
      BooksAPI.update(id, newShelf)
        .then(this.getAllBooks());
    }

    render() {
        return (
            <BookAppContext.Provider
                value={{
                    books: this.state.books,
                    getAllBooks: this.getAllBooks,
                    updateShelf: this.updateShelf,
                }}
            >
                {this.props.children}
            </BookAppContext.Provider>
        );
    }
}

export default BookAppProvider;
