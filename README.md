# React ND #1: My Reads
## Overview
**My Reads** is the first project of Udacity [React nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019). It requires to build a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
The project has the following goals:
* Use [React](https://reactjs.org/) to build the application
* Manage state using [hooks](https://reactjs.org/docs/hooks-overview.html)
* Build components
* Leverage [React Router](https://reactrouter.com/web/guides/quick-start)

## Features
* **Main Page**
    * The main page shows 3 shelves for books:
      * Currently Reading
      * Read
      * Want To Read
    * Each book is shown on the correct shelf, along with its title and all of its authors.
    * The main page shows a control that allows users to move books between shelves. The control is tied to each book instance.
    * When the browser is refreshed, the same information is displayed on the page.
    
![image](https://user-images.githubusercontent.com/53233637/134568456-7e44c0d6-bd64-4ca1-880a-00a9d6550ffe.png)

 * **Search Page**
   * The search page has a search input field.
   * As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors.
   * Search results are not shown when all of the text is deleted out of the search input box.
   * Invalid queries are handled and prior search results are not shown.
   * The search works correctly when a book does not have a thumbnail or an author.
   * The user is able to search for multiple words, such as ```artificial intelligence```.

![image](https://user-images.githubusercontent.com/53233637/134569173-a9724271-6dc1-47fc-b505-1dce38c99799.png)

  * **Routing**
    * The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is ```/search```.
    * The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is ```/```.
 
## Backend Server
Udacity provides ```BooksAPI.js``` file that contains the methods to perform necessary operations on the backend:
* getAll
* update
* search
### ```getAll()```
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.
### ```update(book, shelf)```
* **book**: ```<Object>``` containing at minimum an id attribute
* **shelf**: ```<String>``` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request.
### ```search(query)```
* **query**: ```<String>```
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects. These books do not know which shelf they are on. They are raw results only.
## Getting Started
To run **My Reads** app in dev mode:
1. Clone this repo.
2. ```cd``` into project directory.
3. Install the dependencies by running the following commands:
```sh
npm install
```
4. Start the server by running the following command:
```sh
npm start
```
The ```http:localhost:3000``` page will be automatically opened in your browser.

## Authors
Alexandra Baturina
