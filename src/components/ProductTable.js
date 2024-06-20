import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import ProductPopup from './ProductPopup';
import { DELETE_PRODUCT } from "../reduxContext/actions";

const ProductTable = (props) => {
  const [show, setShow] = useState(false);
  const [editedProduct, setEditProduct] = useState(null)
  const products = useSelector(state => state.products);
  const filteredProducts = useSelector(state => state.filteredProducts);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false)
  }

  const EditProduct = (index) => {
    // console.log("index", index);
    // console.log("products", products);
    // console.log("products[index]", products[index]);
    setEditProduct(products[index]);
    // console.log("editedProduct", editedProduct);

    setShow(true);
  }

  const DeleteProduct = (product) => {
    dispatch(DELETE_PRODUCT(product));
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
            (props.mainSearchValue == "" || props.mainSearchValue == undefined || props.mainSearchValue == null) ?
            (products.map((item, index) => {
              return (
                <tr key={item.id} className='align-middle'>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="primary" className='me-2' onClick={()=>EditProduct(index)}>Edit</Button>
                    <Button variant="danger" onClick={()=>DeleteProduct(item)}>Delete</Button>
                  </td>
                </tr>
              )
            }))
            :
           ( filteredProducts.map((item, index) => {
              return (
                <tr key={item.id} className='align-middle'>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="primary" className='me-2' onClick={()=>EditProduct(index)}>Edit</Button>
                    <Button variant="danger" onClick={()=>DeleteProduct(item)}>Delete</Button>
                  </td>
                </tr>
              )
            }))
          }
        </tbody>
      </Table>
      <ProductPopup show={show} handleClose={handleClose} editedProduct={editedProduct} />
    </div>
  );
};

export default ProductTable;
