import React from 'react';
import ProductTable from './components/ProductTable';
import ProductSearch from './components/ProductSearch';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCreate from './components/ProductCreate';
import "./App.css";

function App() {
  return (
    <Container className='product-container'>
      <Row className='my-4'>
        <Col>
          <ProductSearch />
        </Col>
        <Col className='d-flex justify-content-end'>
          <ProductCreate />
        </Col>
      </Row>
      <ProductTable />
    </Container>
  );
}

export default App;
