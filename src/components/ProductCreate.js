import { Button } from "react-bootstrap"
import ProductPopup from "./ProductPopup"
import { useState } from "react"

export default function ProductCreate() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    return (
        <>
            <Button variant="primary" onClick={()=>setShow(true)}>Create Product</Button>
            <ProductPopup show={show} handleClose={handleClose} />
        </>
    )
}