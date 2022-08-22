import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
function CommercialProject() {  
  return (
    <article className="comrclPrjctBlk wrapper py-80">
        <div className="mterlSlectnContainer">
          <Container>
            <Row className="g-4">
              <Col md={6}>
                <div className="comrclPrjctItem">
                    <Link to="/">
                      <div className="comrclPrjctMedia">
                        <div className="comrclPrjctImg" style={{backgroundImage: `url("img/commercialProject1.png")`}}>
                          <div className="comrclPrjctOverlay"></div>
                        </div>
                        <div className="comerclInfo">
                          <span className="comerInfoTitle">Commercial projects</span>
                          <h4>Luxury Homes</h4>
                          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                          <span className="comrclPrjctBtn">
                        <Link to="javascript:void(0)" className="btnCommon">Explore</Link>
                        </span>
                        </div>
                       
                      </div>
                    </Link>
                  </div>                 
              </Col>
              <Col md={6}>
                <div className="comrclPrjctItem">
                    <Link to="/">
                      <div className="comrclPrjctMedia">
                        <div className="comrclPrjctImg" style={{backgroundImage: `url("img/commercialProject2.png")`}}>
                          <div className="comrclPrjctOverlay"></div>
                        </div>
                        <div className="comerclInfo">
                          <span className="comerInfoTitle">Commercial projects</span>
                          <h4>High End Projects</h4>
                          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                          <span className="comrclPrjctBtn">
                        <Link to="javascript:void(0)" className="btnCommon">Explore</Link>
                        </span>
                        </div>
                       
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
export default CommercialProject;