import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const WishListPage = (props) => {
  console.log(props);
  // console.log(useSelector);
  const productsInWist = useSelector((state) => state.rw.wish);
  console.log(productsInWist);
  // const dispatch = useDispatch();
  // console.log(dispatch);
  return (
    <>
      <div className="wishList mb-5 mt-5">
        <Container>
          <h5 className="text-left mb-4">Wish Product</h5>
          <div className="col-12 wishShow">
            <Table bordered hover responsive="sm">
              <thead>
                <tr>
                  <th>Product Img</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>one</td>
                  <td>best</td>
                  <td>180,00</td>
                  <td>good</td>
                </tr>
                <tr>
                  <td>one</td>
                  <td>best</td>
                  <td>180,00</td>
                  <td>good</td>
                </tr>
                <tr>
                  <td>one</td>
                  <td>best</td>
                  <td>180,00</td>
                  <td>good</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WishListPage;
