import React, { useRef, useState } from 'react';
import ProductTable from './components/ProductTable';
import ProductSearch from './components/ProductSearch';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCreate from './components/ProductCreate';
import "./App.css";

function App() {
  const searchRef = useRef("");
  const [mainSearchValue, setMainSearchValue] = useState("")
  return (
    <Container className='product-container'>
      <Row className='my-4'>
        <ProductSearch searchRef={searchRef} setMainSearchValue={setMainSearchValue} mainSearchValue={mainSearchValue} />
        <Col xs={6} className='d-flex justify-content-end'>
          <ProductCreate />
        </Col>
      </Row>
      <ProductTable searchRef={searchRef} mainSearchValue={mainSearchValue} />
    </Container>
  );
}

export default App;
