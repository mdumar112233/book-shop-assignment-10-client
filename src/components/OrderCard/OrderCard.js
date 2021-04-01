import React from 'react';
import './OrderCard.css';

const OrderCard = (props) => {
    const {admin, email, date, name, author, price, image} = props.order;
    return (
        <div style={{marginLeft: '30px', float: 'left'}}>
        <div className="order-container">
            <div className="order">
                <div className="order-img">
                    <img src={image} alt=""/>
                </div>
                <div className="order-detail">
                    <div className="order-info">
                        <h6>Order Info</h6>
                        <small>{admin}</small><br/>
                        <small>{email}</small><br/>
                        <small>{date}</small>
                    </div><br/>
                    <div className="order-book-info">
                        <h6>Book Info</h6>
                        <small>{name}</small><br/>
                        <small>{author}</small><br/>
                        <small>${price}</small>
                    </div>
                    
                </div>
            </div>
            <div className="success-massage">
                <div className="message">
                    Thanks to order our book
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderCard;