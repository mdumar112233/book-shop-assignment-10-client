import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AllCart.css';


const AllCart = ({item}) => {
    return (
        <div style={{float: 'left', margin: '15px'}}>
            <Card className='main-card' style={{ width: '15rem', height:'22rem'}}>
            <Card.Img className='card-img' variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                Some quick example text to 
                </Card.Text>
                <div className='card-footer'>
                    <Card.Text className='cost'>$212</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default AllCart;