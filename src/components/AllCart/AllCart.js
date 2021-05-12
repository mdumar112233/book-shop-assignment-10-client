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
        <div style={{float: 'left', margin: '15px', position: 'relative'}}>
            <Card className='main-card' style={{ width: '15.4rem', height:'26rem', border: '1px solid gray'}}>
                <div className="img-div">
                    <Card.Img className='card-img' variant="top" src={image} />
                </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {author}
                </Card.Text>
            </Card.Body>
            <div className="card-btn-price">
                    <div className="price">
                        <h4 style={{color: '#eb4d4b'}}>${price}</h4>
                    </div>
                    <div>
                        <Button style={{backgroundColor: '#eb4d4b', border: '0'}}  onClick={handleBtn}>Buy Now</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AllCart;