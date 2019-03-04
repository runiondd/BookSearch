import React from 'react'
import './style.scss';

function SearchResultRow(props) {
    return (
        <table>
            <tbody>
                <tr className="searchResultRow">
                    <td>
                        Book Title: {props.bookTitle}
                        Book Synopsis:  {props.synopsis}
                        Book Author:  {props.author}
                   </td>
                    <td>
                        ViewBtn
                        SaveBtn
                    </td>        
                </tr>
                <tr className="searchResultRow">
                    <td>
                        Book Image
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



