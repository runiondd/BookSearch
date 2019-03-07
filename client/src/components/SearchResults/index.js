import React, { Component } from "react";
import SearchResultRow from '../SearchResultRow';
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
            this.setState({books: res.data})
          })
          .catch(err => console.log(err));
      };

  render() {
    return (
        <div className="bookrow">
                {this.state.books.map((resultRow) => (
                    <SearchResultRow
                        key={resultRow.key}
                        bookTitle={resultRow.title}
                        author={resultRow.author}
                        synopsis={resultRow.synopsis}
                        bookImage={resultRow.bookImage}
                    
                    />
                ))}
        </div>    
    )};
}

export default SearchResults;



