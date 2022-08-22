import { Link } from "react-router-dom";
function FeatureProduct() {  
  return (
    <article className="featrProduct wrapper py-40">
        <div className="mterlSlectnContainer">
          <div className="container">
            <div className="mainHeading headingCenter pb-30">
              <h2>Featured Products</h2>
              <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry </h5>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md">
                  <div className="featrProductItem">
                    <Link to="/productdetail">
                      <div className="featrProductMedia">
                        <div className="featrProductImg" style={{backgroundImage: `url("img/featurProduct1.png")`}}>
                          <div className="featrProductOverlay"></div>
                        </div>
                      </div>
                      <div className="featrProductTitle">
                        <h4>Stone Blocks</h4>
                      </div>
                    </Link>
                  </div>               
              </div>
              <div className="col-md">
                  <div className="featrProductItem">
                    <Link to="/productdetail">
                      <div className="featrProductMedia">
                        <div className="featrProductImg" style={{backgroundImage: `url("img/featurProduct2.png")`}}>
                          <div className="featrProductOverlay"></div>
                        </div>
                      </div>
                      <div className="featrProductTitle">
                        <h4>Stone Tiles & Slabs</h4>
                      </div>
                    </Link>
                  </div>               
              </div>
              <div className="col-md">
                  <div className="featrProductItem">
                    <Link to="/productdetail">
                      <div className="featrProductMedia">
                        <div className="featrProductImg" style={{backgroundImage: `url("img/featurProduct3.png")`}}>
                          <div className="featrProductOverlay"></div>
                        </div>
                      </div>
                      <div className="featrProductTitle">
                        <h4>Stone Sculpture</h4>
                      </div>
                    </Link>
                  </div>               
              </div>
              <div className="col-md">
                  <div className="featrProductItem">
                    <Link to="/productdetail">
                      <div className="featrProductMedia">
                        <div className="featrProductImg" style={{backgroundImage: `url("img/featurProduct4.png")`}}>
                          <div className="featrProductOverlay"></div>
                        </div>
                      </div>
                      <div className="featrProductTitle">
                        <h4>White Jal Marble</h4>
                      </div>
                    </Link>
                  </div>               
              </div>
            </div>
          </div>
        </div>
      </article>
    
  );
}
export default FeatureProduct;