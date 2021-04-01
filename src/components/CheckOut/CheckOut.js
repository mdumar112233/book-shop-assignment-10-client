import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './CheckOut.css';
import CheckOutInfo from './CheckOutInfo';

const CheckOut = () => {
    const {_id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookInfo, setBookInfo] = useState([]);

    const handleOrderInfo = () =>{
        const orderInfo = {...bookInfo[0], admin: loggedInUser.name, email: loggedInUser.email, date: new Date().toString('dd/mm/yyyy')};
        console.log(orderInfo);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => {
            console.log('order place successfully');
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/checkOutProduct/${_id}`)
        .then(res => res.json())
        .then(data => setBookInfo(data))
    }, [_id])
    return (
        <div>
            <Header></Header>
            <div className='checkout-main'>
                <h3>Check Out</h3>
                {
                    bookInfo.map(book => <CheckOutInfo book={book}></CheckOutInfo>)
                }
                <button onClick={handleOrderInfo} className='checkout-btn'>Checkout</button>
            </div>
        </div>

    );
};

export default CheckOut;