import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderCard from '../OrderCard/OrderCard';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState([]);
    console.log(orderInfo.length)
    useEffect(() => {
        fetch('https://young-ravine-72639.herokuapp.com?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderInfo(data))
    }, [])

    return (
        <div className='container'>
            <h3 style={{textAlign: 'center', fontWeight: 'bold'}}> Order page</h3>
                {
                    orderInfo.map(order => <OrderCard order={order}></OrderCard>)
                }
        </div>
    );
};

export default Orders;