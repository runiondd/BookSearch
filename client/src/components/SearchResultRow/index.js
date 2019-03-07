import React from 'react'
import './style.scss';

function SearchResultRow(props) {
    return (
        <table>
            <tbody>
                <tr className="searchResultRow">
                    <td>
                        Book Title: {props.bookTitle} 
                        <br></br>
                        Book Synopsis: {props.synopsis}
                        <br></br>
                        Book Author: {props.author}
                   </td>
                    <td>
                    <button type="button" className="btn btn-secondary">View</button>
                    <button type="button" className="btn btn-secondary">Save</button>
                       
                    </td>        
                </tr>
                <tr className="searchResultRow">
                    <td>
                      <img alt={props.bookImage} src={props.bookImage} />
                    </td>
                    <td>
                        Book Long Desc
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default SearchResultRow;



