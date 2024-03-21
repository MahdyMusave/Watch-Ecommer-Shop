import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Tab, Container, TabContent } from "react-bootstrap";
import ProductSlider from "../cpmponent/productSlider"
const ProductTable = () => {
  const [key, setKey] = useState("offers");
  return (
    <>
      <div className="productTabs">
        <Container>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id="controlled-tab-example"
            className="mb-3 ms-4"
          >
            <Tab eventKey="offers" title="offers">
              <TabContent className="py-3 ps-3">
                <ProductSlider/>
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
