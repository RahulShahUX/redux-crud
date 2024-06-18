import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import ProductPopup from './ProductPopup';
import { DELETE_PRODUCT } from "../reduxContext/actions";

const ProductTable = () => {
  const [show, setShow] = useState(false);
  const [editedProduct, setEditProduct] = useState(null)
  const [editedProduct1, setEditProduct1] = useState(0)
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();


  const handleClose = () => {
    setShow(false)
  }

  const EditProduct = (index) => {
    console.log("index", index);
    console.log("products", products);
    console.log("products[index]", products[index]);
    setEditProduct(products[index]);
    setEditProduct1(editedProduct1=>editedProduct1+1);
    console.log("editedProduct", editedProduct);
    // setTimeout(function() {
      console.log("new", editedProduct1);
    // }, 5000)

    setShow(true);
  }

  const DeleteProduct = (productId) => {
    console.log("index", productId);
    dispatch(DELETE_PRODUCT(productId));
  }

  return (
    <div>
      {/* <Button variant="primary" className='me-2' onClick={()=>{setEditProduct1(editedProduct1=>editedProduct1+1); console.log("editedProduct1", editedProduct1)}}>Edit</Button> */}
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
                <tr key={item.id} className='align-middle'>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="primary" className='me-2' onClick={()=>EditProduct(index)}>Edit</Button>
                    <Button variant="danger" onClick={()=>DeleteProduct(item.id)}>Delete</Button>
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
