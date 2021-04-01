import React from 'react';

const OrderCard = () => {
    // const {admin, email, date, name, author, price} = props.order;
    return (
        <div>
            <div className="order">
                <div className="order-img">
                    <img src="" alt=""/>
                </div>
                <div className="order-detail">
                    <div className="order-info">
                        <h5>Order Info</h5>
                        <p>order person name</p>
                        <p>order person email</p>
                        <p>order date</p>
                    </div>
                    <div className="order-book-info">
                        <h5>Book Info</h5>
                        <p>Book Name</p>
                        <p>Book author name</p>
                        <p>Book price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;

