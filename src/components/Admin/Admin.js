import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';
const Admin = () => {
    const [addBook, setAddBook] = useState({
        name: '',
        author: '',
        price: '',
    })
    const [imageURL, setImageURl] = useState(null);

    const handleInput = e => {
        const newAddBook = {...addBook};
        newAddBook[e.target.name] = e.target.value;
        setAddBook(newAddBook);
    }

    const handleImage = e => {
        console.log(e.target.files)
        const imageData = new FormData();
        imageData.set('key', '0bbd94d120064c98ef673307396657da');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(res => {
            setImageURl(res.data.data.display_url);
        })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSubmit = (e) => {
        const addBookToDataBase = {...addBook,image: imageURL};
        if(imageURL){
            fetch('http://localhost:5000/addBook', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(addBookToDataBase)
        })
        .then(res => {
            console.log('save data successfully')
        })
        }
        e.preventDefault();
    }
    return (
        <div className='admin'>
            <div className="admin-container">
            <div className="admin-menu">
                <div className="aside-menu">
                    <div className="menu-list">
                    <h5><Link className='home-logo' to='/home'>Learn Something New</Link></h5>
                        <ul>
                            <li>
                                <Link className='link' to='manageBook'>Manage books</Link>
                            </li>
                            <li>
                                <Link className='link' >Add books</Link>
                            </li>
                            <li>
                                <Link className='link'>Edit books</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="admin-submit">
                <form onSubmit={handleSubmit}>
                    <div className="add-book-data">
                    <div className="input-one">
                        <label htmlFor="">Add name</label><br/>
                        <input type="text" onBlur={handleInput} name='name' placeholder='Enter your naem'/><br/><br/>
                        <label htmlFor="">Add price</label><br/>
                        <input type="number" onBlur={handleInput} name='price'  placeholder='Enter author naem'/>
                    </div>
                    <div className="input-two">
                    <label htmlFor="">Add author name</label><br/>
                        <input type="text" onBlur={handleInput} name='author' placeholder='Enter author name'/><br/><br/>
                        <label htmlFor="">Add a cover photo</label><br/>
                        <input type="file" name='image' onChange={handleImage}/><br/><br/>
                        <input type="submit" value='save'/>
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Admin;