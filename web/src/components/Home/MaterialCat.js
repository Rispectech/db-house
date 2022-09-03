import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import MainHeading from './../MainHeading';  
import MaterialSelection from './../MaterialSelection';  
import Material1 from "./../../img/materialImg1.png";
import Material2 from "./../../img/materialImg2.png";
import Material3 from "./../../img/materialImg3.png";
function MaterialCat() {
  return (
  <article className="mterlSlectnBlk wrapper py-40">
    <div className="mterlSlectnContainer">
      <Container>
          <MainHeading
          Heading="Material Selection"
          HeadingParah="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been when an unknown printer took a galley of type and scrambled "
          className="headingCenter"
          />
        <Row className="g-4">
            <Col lg md={6}>
              <MaterialSelection
                Link="/productlist"
                Image={Material1}
                Heading="Imported Marble"
                alt="materialImg"             
              />
            </Col>
            <Col lg md={6}>
              <MaterialSelection
                  Link="/productlist"
                  Image={Material2}
                  Heading="Flawless White & Cat's Eye"
                  className="active"
                />                      
            </Col>
            <Col  >
                <MaterialSelection
                  Link="/productlist"
                  Image={Material3}
                  alt="Image"
                  Heading="Ninety Degree Stone"
                  className=""
                />                        
            </Col>
        </Row>
      </Container>
    </div>
  </article>
  );
}
export default MaterialCat;