import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import ProductTabCartList from "../cpmponent/productTabCartList";

const CartListPage = (props) => {

  // console.log(props, "pppp");
  let carts = props.cart;
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [tax, setTax] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(cart);
  useEffect(() => {
    let price = 0;
    carts.forEach((cart_item) => {
      return (price += cart_item.qty * cart_item.price);
    });
    // console.log(price);
    setSubtotalPrice(price);
    // setTax(price + tax);
    if (carts.length === 0) {
      setTax(0);
      let cartShow = document.querySelector(".cartShow");
      console.log(cartShow);
      let table = document.querySelector("Table");
      // console.log(table);
      table.style.display = "none";
      cartShow.innerHTML += "No Products in cart list";
    }
  }, [carts, totalPrice, setSubtotalPrice,tax,setTax]);

  return (
    <>
      <div className="productSlider mb-5 mt-5">
        <Container>
          <h5 className="text-left mb-4 ps-2 shadow">Cart List</h5>
          <Row>
            <div className="col-9 cartShow">
              <Table bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>Product Img</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity: {tax}</th>
                    <th>Sub Total: {subtotalPrice}</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    carts.map((product, idx) => {
                      
                      return (
                        <ProductTabCartList
                          product={product}
                          isWish={false}
                          isCart={true}
                        />
                      )
                    })

                  }
                </tbody>
              </Table>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
const mapStateToProps=(state) => {
  return {
    cart:state.rCart.cart,
  }
}

export default connect(mapStateToProps)(CartListPage);
