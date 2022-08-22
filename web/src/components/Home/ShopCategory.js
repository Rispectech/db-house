import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function ShopCategory() {

  const navigate = useNavigate()
  const categories = useSelector(s => s.categories)
  console.log(categories)

  return (
    <article className="shopByCategy wrapper py-40">
      <div className="mterlSlectnContainer">
        <div className="container">
          <div className="mainHeading headingCenter pb-30">
            <h2>Shop By Category</h2>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
          </div>
        </div>
        <Container>
          <Row>
            {categories?.map((category) => (
              <Col lg={3} md={6}>
                <div className="categoryItem" style={{ cursor: 'pointer' }} onClick={() => { navigate(`/category`, { state: category }) }}>
                  <div className="categoryMedia">
                    <div className="categoryImg" style={{ backgroundImage: `url("img/catListImg4.jpg")` }}>
                      <div className="categoryOverlay"></div>
                    </div>
                    <span className="categoryBtn" style={{ display: 'flex' }}>
                      <button className="btnCommon" onClick={() => { navigate(`/category`, { state: category }) }}>Shop Now</button>
                    </span>
                  </div>
                  <div className="categoryTitle">
                    <h4>{category?.category.name}</h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </article>

  );
}
export default ShopCategory;