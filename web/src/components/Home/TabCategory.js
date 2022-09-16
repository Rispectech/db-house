import { Link } from "react-router-dom";
import MainHeading from "../MainHeading";
import { Row, Col, Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
function TabCategory() {
  return (
    <article className="portfolioBlock wrapper py-80">
      <div className="portfolioContainer">
        <Container>
          <Row>
            <div className="col">
              <MainHeading
                Heading="Marbles and natural stones"
                HeadingParah="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                className="headingCenter"
              />
            </div>
          </Row>
          <div className="portfolioTabsOuter">
            <div className="marblesTabsRow">
              <div className="marblesTabsOuter">
                <Tabs
                  defaultActiveKey="all"
                  id="uncontrolled-tab-example"
                  className="marblesTabs"
                >
                  <Tab eventKey="all" title="All">
                    <div className="marblesCatItems">
                      <Row className="row filterMain g-2">
                        <Col lg md={6}>
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg1.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </Col>
                        <Col lg md={6}>
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg2.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </Col>
                        <Col lg md={6}>
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg3.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                      <Row className="row filterMain g-2 pt-10">
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg4.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg5.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg6.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Tab>
                  <Tab eventKey="natural-stone" title="Natural Stone">
                    <div className="marblesCatItems">
                      <Row className="row filterMain g-2">
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg6.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg4.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg5.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Tab>
                  <Tab eventKey="artifical-stone" title="Artificial Stone">
                    <div className="marblesCatItems">
                      <Row className="row filterMain g-2">
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg2.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg4.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="filtrItem">
                            <Link to="/">
                              <div className="filtrItemMedia">
                                <div
                                  className="filtrItemCatImg"
                                  style={{ backgroundImage: `url("img/tabImg6.png")` }}
                                >
                                  <div className="filtrOverlay"></div>
                                </div>
                                <span className="fitrInfoLink">
                                  <Link to="javascript:void(0)" className="">
                                    High End Projects
                                  </Link>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Tab>
                  <Tab eventKey="machinery" title="Machinery">
                    <Row className="row filterMain g-2">
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg4.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg6.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg2.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Row>
                  </Tab>
                  <Tab eventKey="stone-quarry" title="Stone Quarry">
                    <Row className="row filterMain g-2">
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg5.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg2.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg4.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Row>
                  </Tab>
                  <Tab eventKey="stone-service" title="Stone Service">
                    <Row className="row filterMain g-2">
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg6.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg1.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg3.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Row>
                  </Tab>
                  <Tab eventKey="stone-adhesives" title="Stone Adhesives">
                    <Row className="row filterMain g-2">
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg4.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg5.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="filtrItem">
                          <Link to="/">
                            <div className="filtrItemMedia">
                              <div
                                className="filtrItemCatImg"
                                style={{ backgroundImage: `url("img/tabImg6.png")` }}
                              >
                                <div className="filtrOverlay"></div>
                              </div>
                              <span className="fitrInfoLink">
                                <Link to="javascript:void(0)" className="">
                                  High End Projects
                                </Link>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Row>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
export default TabCategory;
