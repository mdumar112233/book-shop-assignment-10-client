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
    console.log(loggedInUser)

    const handleOrderInfo = () =>{
        const orderInfo = {...bookInfo[0], admin: loggedInUser.name, email: loggedInUser.email, date: new Date().toString('dd/mm/yyyy')};
        console.log(orderInfo);
        fetch('https://young-ravine-72639.herokuapp.com/orders', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => {
            console.log('order place successfully');
        })
    }

    useEffect(() => {
        fetch(`https://young-ravine-72639.herokuapp.com/checkOutProduct/${_id}`)
        .then(res => res.json())
        .then(data => setBookInfo(data))
    }, [_id])
    return (
        <div>
            <Header></Header>
            <div className='checkout-main'>
                <h4 style={{marginBottom: '20px', fontWeight:'900'}}>Check Out</h4>
                {
                    bookInfo.map(book => <CheckOutInfo book={book}></CheckOutInfo>)
                }
            </div>
            <button onClick={handleOrderInfo} className='checkout-btn'>Checkout</button>
        </div>

    );
};

export default CheckOut;