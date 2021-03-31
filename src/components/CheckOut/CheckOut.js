import React from 'react';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className='checkout-main'>
            <h3>Check Out</h3>
            <table>
                <tr>
                    <th>Book Name</th>
                    <th>Quantity</th>
                    <th>price</th>
                </tr>
                <tr>
                    <td>alam</td>
                    <td>1</td>
                    <td>$43</td>
                </tr>
                <tr>
                    <td>hamil</td>
                    <td>1</td>
                    <td>$92</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>$59</td>
                </tr>
            </table>

            <button className='checkout-btn'>Checkout</button>
        </div>
    );
};

export default CheckOut;