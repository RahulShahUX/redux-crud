import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_PRODUCT } from "../reduxContext/actions";
import { useRef } from "react";

export default function ProductSearch(props) {
  const dispatch = useDispatch();
  const searchRef = useRef("");

  const SearchProduct = () => {
    const searchValue = (searchRef.current.value).toLowerCase();
    props.setMainSearchValue(searchValue);
    // console.log("props.searchRef.current.value from search", props.searchRef.current.value);
    dispatch(SEARCH_PRODUCT(searchValue));
  }
  return (
    <>
      {(searchRef.current.value) &&
        <Col xs={12}>
          <div>
            <h2>Search Products: {searchRef.current.value}</h2>
          </div>
        </Col>
      }
      <Col xs={6}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            ref={searchRef}
          />
          <Button variant="outline-success" onClick={() => SearchProduct()}>Search</Button>
        </Form>
      </Col>
    </>
  )
}