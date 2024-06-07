import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reduxContext/actions';
import { Table, Button } from 'react-bootstrap';
import ProductPopup from './ProductPopup';

const ProductTable = () => {
  const [show, setShow] = useState(false);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
      <Table bordered >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th style={{ width: "200px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="primary" className='me-2' onClick={()=>setShow(true)}>Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <ProductPopup show={show} handleClose={handleClose} />
    </div>
  );
};

export default ProductTable;
