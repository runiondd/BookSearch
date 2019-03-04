import React, { Component } from "react";
import SearchResultRows from '../SearchResultRow';
import './style.scss';
import API from "../../Utils/api";

class SearchResults extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
          .then(res => {
            console.log("success:", res);
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          })
          .catch(err => console.log(err));
      };

  render() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between searchBar">

                <SearchResultRows 
                    bookTitle={this.state.books.title}
                    author={this.state.books.author}
                    synopsis={this.state.books.synopsis}
                />
                

            </ nav>
            <div>

                {/* this is where we will do mapping */}
           
            </div>
        </div>    
    )};
}

export default SearchResults;



