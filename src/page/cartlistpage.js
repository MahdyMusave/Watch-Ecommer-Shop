import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import ProductTabCartList from "../cpmponent/productTabCartList";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product7.jpg";
import product5 from "../images/product8.jpg";
const CartListPage = (props) => {
  const allProducts = [
    {
      id: 1,
      src: product1,
      name: "product1",
      price: 300,
      rating: 5,
      qty: 3,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
    {
      id: 2,
      src: product2,
      name: "product2",
      price: 400,
      rating: 2,
      qty: 10,
      maxQuantity: 2,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
    {
      id: 3,
      src: product3,
      name: "product3",
      price: 370,
      rating: 3.5,
      qty: 7,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
    {
      id: 4,
      src: product4,
      name: "product4",
      price: 500,
      rating: 5,
      qty: 1,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
    {
      id: 5,
      src: product5,
      name: "product5",
      price: 250,
      rating: 4,
      qty: 8,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
    {
      id: 6,
      src: product2,
      name: "product6",
      price: 400,
      rating: 1,
      qty: 3,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
  ];
  // console.log(props, "pppp");
  let carts = allProducts;
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

export default CartListPage;
