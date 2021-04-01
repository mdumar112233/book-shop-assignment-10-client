import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderCard from '../OrderCard/OrderCard';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState([]);
    console.log(orderInfo)
    useEffect(() => {
        fetch('http://localhost:5000/orderinfo?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderInfo(data))
    }, [])

    return (
        <div className='container'>
            <h3>This is order page</h3>
                {
                    orderInfo.map(order => <OrderCard order={order}></OrderCard>)
                }
        </div>
    );
};

export default Orders;