import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './AllCart.css';


const AllCart = (props) => {
    const {name, image, author, price, _id} = props.item;
    const history = useHistory();
    const handleBtn = () => {
        const url = `/checkout/${_id}`;
        history.push(url);
    }
    return (
        <div style={{float: 'left', margin: '15px'}}>
            <Card className='main-card' style={{ width: '15rem', height:'22rem'}}>
            <Card.Img className='card-img' variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {author}
                </Card.Text>
                <div className='card-footer'>
                    <Card.Text className='cost'>${price}</Card.Text>
                    <Button variant="primary" onClick={handleBtn}>Buy Now</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default AllCart;