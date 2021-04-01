import React from 'react';
import demoImage from '../../books/image 20.png';

const Demo = () => {
    return (
        <div className='container'>
        <div className="order-container">
            <div className="order">
                <div className="order-img">
                    <img src={demoImage} alt=""/>
                </div>
                <div className="order-detail">
                    <div className="order-info">
                        <h6>Order Info</h6>
                        <small>md umar faruk</small><br/>
                        <small>mdumarfaruk187326@gmail.com</small><br/>
                        <small>2021-04-01T13:22:43.562Z</small>
                    </div><br/>
                    <div className="order-book-info">
                        <h6>Book Info</h6>
                        <small>Eloqurent javascript</small><br/>
                        <small>Marjin Haverbeke</small><br/>
                        <small>132</small>
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

export default Demo;