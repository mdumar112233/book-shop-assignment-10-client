import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookTable from './BookTable';
import './ManageBook.css';

const ManageBook = () => {
    const [manageBook , setManageBook] = useState([]);
    console.log(manageBook)
    useEffect(() => {
        fetch('https://young-ravine-72639.herokuapp.com/products', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setManageBook(data))
    }, [])

    return (
        <div>
             <div>
                <div className="manage-container">
                    <div className="manage-menu">
                        <div className="aside">
                            <div className="manage-menu-list">
                                <h5>Learn Something New</h5>
                                <ul>
                                    <li>
                                        <Link className='link'>Manage books</Link>
                                    </li>
                                    <li>
                                        <Link className='link' to='admin'>Add books</Link>
                                    </li>
                                    <li>
                                        <Link className='link'>Edit books</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="manage-book">
                        <table>
                        <tr>
                            <th>Book name</th>
                            <th>Author name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                        </table>
                        {
                            manageBook.map(manage => <BookTable manage={manage}></BookTable>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBook;
