# MyReads Project

This is a bookshelf app that allows you to select and categorize books into the following shelves: Read, Currently Reading, and Want to Read. You can also search for books (with slight limitations; see Backend Server) and add them to your bookshelf.

Routes:
* '/': the home page where you will see your categorized books
* '/search': the search page where you can find and add new books

(This is the final assessment project for Udacity's React Fundamentals course. The project emphasizes using React to build an application. I began with Udacity's starter template and used their API server/client library to persist information in the backend.)

## Getting Started

Note that this app was tested with node v8.12.0 (npm v6.4.1)
* (optional) install and use [nvm](https://github.com/nvm-sh/nvm) to set your node version: `nvm install && nvm use`
* install all project dependencies: `npm install`
* start the development server: `npm start`

## Backend Server

To simplify the development process, a backend server has been provided by Udacity. For detailed information on this backend server, please refer to the starter template that this repo is forked from: https://github.com/udacity/reactnd-project-myreads-starter#backend-server

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Ideas to extend this project

Here I am listing ideas outside the project requirements that could be interesting to implement:
* Drag and Drop bookshelves
* Add pagination to search (if supported by api)
* Add book details page
* Learn testing (add to App.test.js)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
