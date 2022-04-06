import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShelfType } from '../types';


class BookItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    authors: PropTypes.array,
    image: PropTypes.string,
    shelf: PropTypes.string,
  }

  componentDidMount() {
    let element = document.getElementById(`${this.props.id}-shelf`);
    element.value = this.props.shelf;
  }

  render() {
    const book = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.image}")` }}></div>
          <div className="book-shelf-changer">
            <select id={`${book.id}-shelf`}>
              <option value="move" disabled>Move to...</option>
              <option value={ShelfType.CURRENTLY_READING}>Currently Reading</option>
              <option value={ShelfType.WANT_TO_READ}>Want to Read</option>
              <option value={ShelfType.READ}>Read</option>
              <option value={ShelfType.NONE}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    )
  }
}

BookItem.defaultProps = {
  title: "",
  authors: [],
  image: "",
  shelf: ShelfType.NONE,
}

export default BookItem;