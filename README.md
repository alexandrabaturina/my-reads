# React ND #1: My Reads
## Overview
**My Reads** is the first project of Udacity [React nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019). It requires to build a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
The project has the following goals:
* Use [React](https://reactjs.org/) to build the application
* Manage state using [hooks](https://reactjs.org/docs/hooks-overview.html)
* Build components
* Leverage [React Router](https://reactrouter.com/web/guides/quick-start)

## Features
* Main Page
    * The main page shows 3 shelves for books:
      * Currently Reading
      * Read
      * Want To Read
    * Each book is shown on the correct shelf, along with its title and all of its authors.
    * The main page shows a control that allows users to move books between shelves. The control is tied to each book instance.
    * When the browser is refreshed, the same information is displayed on the page.
    
![image](https://user-images.githubusercontent.com/53233637/134568456-7e44c0d6-bd64-4ca1-880a-00a9d6550ffe.png)

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
