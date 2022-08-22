import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import MainHeading from './../MainHeading';
function MaterialCat2() {  
  return (
    <article className="materialScndBlk wrapper pt-80">
    <div className="whyChooseRow">
      <div className="container">
      <MainHeading
        Heading="Material Selection"
        HeadingParah="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been when an unknown printer took a galley of type and scrambled"
        className="headingCenter"
        />
        <div className="materialScndDiv">
          <Row className="g-4">
            <Col lg md={6}>
              <div className="materialScndItem">
                <Link to="/category">
                  <div className="materialScndMedia">
                    <div className="materialScndImg" style={{backgroundImage: `url("img/materialMarbal1.png")`}}>
                      <div className="materialScndOverlay"></div>
                    </div>
                    <span className="materialScndBtn">
                    <Link to="/category" className="btnCommon">Imported Marble</Link>
                    </span>
                  </div>
                </Link>
              </div>               
            </Col>
            <Col lg md={6}>
                  <div className="materialScndItem">
                    <Link to="/category">
                      <div className="materialScndMedia">
                        <div className="materialScndImg" style={{backgroundImage: `url("img/materialMarbal2.png")`}}>
                          <div className="materialScndOverlay"></div>
                        </div>
                        <span className="materialScndBtn">
                        <Link to="/category" className="btnCommon">Imported Marble</Link>
                        </span>
                      </div>
                    </Link>
                  </div>              
            </Col>
            <Col>
                <div className="materialScndItem">
                  <Link to="/category">
                    <div className="materialScndMedia">
                      <div className="materialScndImg" style={{backgroundImage: `url("img/materialMarbal3.png")`}}>
                        <div className="materialScndOverlay"></div>
                      </div>
                      <span className="materialScndBtn">
                      <Link to="/category" className="btnCommon">Imported Marble</Link>
                      </span>
                    </div>
                  </Link>
                </div>                
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </article>
);
}
export default MaterialCat2;