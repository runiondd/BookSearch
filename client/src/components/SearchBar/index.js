import React from 'react'
import './style.scss';

function SearchBar(props) {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between searchBar">
            <form className="form-inline">
                <input className="form-control" type="text" placeholder="Default input" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </ form>
        </ nav>
    )
}

export default SearchBar;



