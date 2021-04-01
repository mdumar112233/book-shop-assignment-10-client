import React, { useState } from 'react';
import { useEffect } from 'react';
import AllCart from '../AllCart/AllCart';
import Header from '../Header/Header';

const Home = () => {
const [allBook, setAllBook] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/products', {
        method: 'GET',
        headers: {'content-type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => setAllBook(data))
}, [])
    return (
        <div>
        <Header></Header>
            <div className="container">
                {
                    allBook.map(item => <AllCart item={item}></AllCart>)
                }
            </div>
        </div>
    );
};

export default Home;