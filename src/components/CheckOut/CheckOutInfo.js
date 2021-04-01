import React from 'react';

const CheckOutInfo = (props) => {
    const {name,price} = props.book;
    console.log(name)
    return (
        <div>
            <table>
                <tr>
                    <th>Book name</th>
                    <th>Quantity</th>
                    <th>price</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>1</td>
                    <td>${price}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>${price}</td>
                </tr>
            </table>
        </div>
    );
};

export default CheckOutInfo;