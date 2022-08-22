import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
function ImportCollection2() {
  return (
    <article className="importColectionBlk yelloBg wrapper py-40">
      <div className="importColectnMainDiv">
      <Container>
          <Row className="align-items-center justify-content-between ">
              <Col className="col-sm">
                <div className="mainHeading hdngNoBorder headingLeft pb-20">
                <h2>Imported Marble & Collection </h2>
                <h5 className="width50">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                </div>
                <div className="importMrblBtn">
                  <Link to="javascript:void(0)" className="btnCommon btnDark">Shop Now</Link>
                </div>              
              </Col>
              <Col className="d-xs-none d-md-block" >
                <div className="importColectnImg">
                  <img src="img/importedMarbleImg.png" alt="Import Marble Collection"/>
                </div>
              </Col>
          </Row>
        </Container>
      </div>
   </article>
  );
}
export default ImportCollection2;