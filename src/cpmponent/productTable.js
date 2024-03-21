import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Tab, Container, TabContent } from "react-bootstrap";
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
                <div className="shadow py-3 ps-3 ">
                  <p>
                    Den iranska regeringen har infört många hårda och orättvisa
                    lagar mot afghanska migranter som gör det väldigt svårt att
                    hitta arbete. Jag är intresserad av programmering men de
                    tillåter mig inte att gå på universitetet och för att jag
                    ska kunna öppna ett bankkonto krävs det 100 miljoner iranska
                    rial, vilket är mycket pengar. Jag försöker därför intensivt
                    att slutföra några projekt för att så snart som möjligt
                    kunna få ett visum och lämna Iran. Situationen för mig som
                    afghan i Iran är mycket svår på grund av de orättvisa
                    lagarna och jag hoppas kunna komma till ett land med mer
                    rättvisa och möjligheter att utbilda mig inom mitt
                    intresseområde programmering.
                  </p>
                </div>
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
