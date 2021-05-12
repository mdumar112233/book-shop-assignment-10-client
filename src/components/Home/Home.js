import React, { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import AllCart from '../AllCart/AllCart';
import Header from '../Header/Header';

const Home = () => {
const [allBook, setAllBook] = useState([]);

useEffect(() => {
    fetch('https://young-ravine-72639.herokuapp.com/products', {
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
                    allBook.length === 0 && <Spinner style={{marginLeft: '32rem', marginTop: '5rem'}} animation="border" />
                }
                {
                    allBook.map(item => <AllCart item={item}></AllCart>)
                }
            </div>
        </div>
    );
};

export default Home;