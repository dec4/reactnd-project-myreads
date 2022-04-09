import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShelfType } from '../types';


class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { id, shelf } = this.props.book;
    let element = document.getElementById(`${id}-shelf`);
    element.value = shelf ? shelf : ShelfType.NONE;
  }

  render() {
    const {
      id,
      title="",
      authors=[],
      imageLinks={},
      shelf=ShelfType.NONE,
    } = this.props.book;
    const imageLink = imageLinks.thumbnail;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLink}")` }}></div>
          <div className="book-shelf-changer">
            <select id={`${id}-shelf`}>
              <option value="move" disabled>Move to...</option>
              <option value={ShelfType.CURRENTLY_READING}>Currently Reading</option>
              <option value={ShelfType.WANT_TO_READ}>Want to Read</option>
              <option value={ShelfType.READ}>Read</option>
              <option value={ShelfType.NONE}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    )
  }
}

export default BookItem;