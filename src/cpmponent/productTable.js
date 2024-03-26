import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Tab, Container, TabContent } from "react-bootstrap";
import ProductSlider from "../cpmponent/productSlider";
import producdSliderImg1 from "../images/product1.jpg";
import producdSliderImg2 from "../images/product2.jpg";
import producdSliderImg3 from "../images/product3.jpg";
import producdSliderImg4 from "../images/product7.jpg";
import producdSliderImg5 from "../images/product8.jpg";

const ProductTable = () => {
  const [key, setKey] = useState("offers");
  const offersPro = [
    {
      id: 1,
      src: producdSliderImg1,
      name: "producdSliderImg1",
      price: 300,
      oldPrice: 420,
      rating: 1,
      qty: 1,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
    {
      id: 2,
      src: producdSliderImg2,
      name: "producdSliderImg2",
      price: 300,
      oldPrice: 420,
      rating: 2,
      qty: 1,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
    {
      id: 3,
      src: producdSliderImg3,
      name: "producdSliderImg3",
      price: 300,
      oldPrice: 420,
      rating: 4,
      qty: 1,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
    {
      id: 4,
      src: producdSliderImg4,
      name: "producdSliderImg4",
      price: 300,
      oldPrice: 420,
      rating: 3,
      qty: 1,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
    {
      id: 4,
      src: producdSliderImg5,
      name: "producdSliderImg5",
      price: 300,
      oldPrice: 420,
      rating: 1,
      qty: 1,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
  ];
  return (
    <>
      <div className="productTabs">
        <Container>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id="controlled-tab-example"
          >
            <Tab eventKey="offers" title="offers">
              <TabContent>
                <ProductSlider slides={offersPro} />
              </TabContent>
            </Tab>
            <Tab eventKey="latest" title="latest">
              <TabContent className="py-3 ps-3">
                <div className="shadow py-3 ps-3 ">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  </p>
                </div>
              </TabContent>
            </Tab>
            <Tab eventKey="specail" title="specail">
              <TabContent className="py-3 ps-3">
                <div className="shadow py-3 ps-3 ">
                  <p>
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  </p>
                </div>
              </TabContent>
            </Tab>
            <Tab eventKey="Best" title="BestSeller Products">
              <TabContent className="py-3 ps-3">
                <div className="shadow py-3 ps-3 ">
                  <p>
                    Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  </p>
                </div>
              </TabContent>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default ProductTable;
