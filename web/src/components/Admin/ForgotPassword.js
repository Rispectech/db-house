import { Link } from "react-router-dom";

import { Row, Col, Alert, Container, Form ,label} from "react-bootstrap"
import logo from "../../assets/images/logo-sm.png";
import Style from './AdminStyle';
function ForgotPassword() {
     return (
      <>
        <Style/>
    <div className="auth-page">
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col lg={4} md={5} className="col-xxl-3">
          <div className="auth-full-page-content d-flex p-sm-5 p-4">
            <div className="w-100">
              <div className="d-flex flex-column h-100">
                <div className="mb-4 mb-md-5 text-center">
                  <Link to="/merchant/dashboard" className="d-block auth-logo">
                    <img src={logo} alt="" height="53" />
                  </Link>
                </div>
                <div className="auth-content my-auto">
                  <div className="text-center">
                    <h5 className="mb-0">Reset Password</h5>
                    <p className="text-muted mt-2">Reset Password with DBHouz</p>
                  </div>
                  <Form className="formStyle mt-4 pt-2">                  
                    <div className="mb-4">
                    <label htmlFor="firstNameFld" className="form-label">Email*</label>
                    <input type="email" className="form-control" placeholder="admin@dbhouz.com" />
                    </div>                   
                    <div className="mb-3">
                      <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Reset</button>
                    </div>
                  </Form>
                  
                  <div className="mt-5 text-center">
                    <p className="text-muted mb-0">Remember It ? <Link to="/merchant/login"
                      className="text-primary fw-semibold"> Sign In </Link> </p>
                  </div>
                </div>
                <div className="mt-4 mt-md-5 text-center">
                  <p className="mb-0"> {new Date().getFullYear()} © DB Houz</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-xxl-9 col-lg-8 col-md-7">
                <div className="auth-bg pt-md-5 p-4 d-flex">
                    <div className="bg-overlay bg-primary"></div>
                    <ul className="bg-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-7">
                            <div className="p-0 p-sm-4 px-xl-0">                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </Row>
    </Container>
  </div> 
  </> 
  );
}
export default ForgotPassword;  
