import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import SearchResults from '../components/SearchResults';
import API from "../Utils/api";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    //this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log("success:", res);
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <SearchResults />
    );
  }
}

export default Search;
