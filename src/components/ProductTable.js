import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import ProductPopup from './ProductPopup';

const ProductTable = () => {
  const [show, setShow] = useState(false);
  const [editedProduct, setEditProduct] = useState([])
  const products = useSelector(state => state.products);


  const handleClose = () => {
    setShow(false)
  }

  const EditProduct = (index) => {
    setShow(true);
    setEditProduct([products[index]]);
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
            products.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="primary" className='me-2' onClick={()=>EditProduct(index)}>Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <ProductPopup show={show} handleClose={handleClose} editedProduct={editedProduct} />
    </div>
  );
};

export default ProductTable;
