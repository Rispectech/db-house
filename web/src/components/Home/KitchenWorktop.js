import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import MainHeading from "../MainHeading";
function KitchenWorktop() {
  return (
    <article className="kitchWrkShpBlk wrapper py-40">
      <div className="mterlSlectnContainer">
        <div className="container">
          <MainHeading
            Heading="Kitchen Worktops"
            HeadingParah="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="headingCenter"
          />
        </div>
        <Container>
          <Row className="g-4">
            <Col lg md={6}>
              <div className="kitchWrkShpItem">
                <Link to="/">
                  <div className="kitchWrkShpMedia">
                    <div
                      className="kitchWrkShpImg"
                      style={{ backgroundImage: `url("img/kitchenWorktopImg1.png")` }}
                    >
                      <div className="kitchWrkShpOverlay"></div>
                    </div>
                    <span className="kitchWrkShpBtn">
                      <Link to="/productlist" className="btnCommon">
                        Stone Blocks
                      </Link>
                    </span>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="kitchWrkShpItem">
                <Link to="/">
                  <div className="kitchWrkShpMedia">
                    <div
                      className="kitchWrkShpImg"
                      style={{ backgroundImage: `url("img/kitchenWorktopImg1.png")` }}
                    >
                      <div className="kitchWrkShpOverlay"></div>
                    </div>
                    <span className="kitchWrkShpBtn">
                      <Link to="/productlist" className="btnCommon">
                        Stone Blocks
                      </Link>
                    </span>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </article>
  );
}
export default KitchenWorktop;
