import { useRef, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT, EDIT_PRODUCT } from "../reduxContext/actions";


export default function ProductPopup(props) {
    const [currentProduct, setCurrentProduct] = useState(null)
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const nameRef = useRef(null);
    const priceRef = useRef(null);


    const categoryRef = useRef(null);
    // console.log("props", props.editedProduct.id);
    const AddProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: nameRef.current.value,
            price: priceRef.current.value,
            category: categoryRef.current.value
        }
        console.log("updated products", products);
        dispatch(ADD_PRODUCT(newProduct));
        props.handleClose();
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" ref={nameRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" ref={priceRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Category" ref={categoryRef} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => AddProduct()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}