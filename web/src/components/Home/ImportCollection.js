import { Link } from "react-router-dom";
import MainHeading from "../MainHeading";
import { Row, Col, Container } from "react-bootstrap";
function ImportCollection() {
  return (
    <article className="importColectionBlk pinkBg wrapper py-40">
      <div className="importColectnMainDiv">
        <Container>
          <Row className="align-items-center justify-content-between ">
            <Col sm>
              <MainHeading
                Heading="Imported Marble & Collection"
                HeadingParah="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                className="hdngNoBorder headingLeft pb-20"
                parahClass="width50"
              />
              <div className="importMrblBtn">
                <Link to="/category" className="btnCommon">
                  Shop Now
                </Link>
              </div>
            </Col>
            <Col sm="auto">
              <div className="importColectnImg">
                <img src="img/importedMarbleImg.png" alt="Import Marble Collection" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </article>
  );
}
export default ImportCollection;
