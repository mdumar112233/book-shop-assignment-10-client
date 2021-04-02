import React from 'react';
import './BookTable.css';
import Edit from '../../icons/Group 307.png';
import Delete from '../../icons/Group 33150.png';

const BookTable = (props) => {
    const {name, author, price, _id} = props.manage;
    console.log(_id)

    const handleDelete = (e) => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                console.log('item delete')
            }
        })
    }

    return (
        <div>
             <table>
                <tr>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>${price}</td>
                    <td className='edit-delete'>
                        <div>
                            <img style={{width: '20px', cursor: 'pointer'}} src={Edit} alt=""/> 
                        </div>
                        <div>
                            <img onClick={handleDelete} style={{width: '20px', marginLeft: '4px', cursor: 'pointer'}} src={Delete} alt=""/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default BookTable;