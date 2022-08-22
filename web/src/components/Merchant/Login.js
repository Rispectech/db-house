import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Alert, Container, Form, label } from "react-bootstrap"
import Style from './DashboardStyle';
import logo from "../../assets/images/logo-sm.png";
import { RestAdmin } from '../../rest';
import { useDispatch, useSelector } from 'react-redux';
import { stateActions } from '../../redux/stateActions';
import useMerchantAuth from '../../hooks/useMerchantAuth';
function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [formError, setFormError] = useState()
  const isMerchant = useMerchantAuth();

  useEffect(() => {
    if (isMerchant === true) navigate("/merchant/dashboard")
  }, [isMerchant])

  return (
    <>
      <Style />
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/merchant/login" className="d-block auth-logo">
                        <img src={logo} alt="" height="53" />
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Welcome Back !</h5>
                        <p className="text-muted mt-2">Sign in to continue to DB Houz</p>
                      </div>
                      <Form className="formStyle mt-4 pt-2">
                        <div className="mb-4">
                          <label htmlFor="firstNameFld" className="form-label">Email*</label>
                          <input type="email" className="form-control" placeholder="admin@dbhouz.com" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Password</label>
                            </div>
                          </div>
                          <div className="mb-4">
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="remember-check" />
                              <label className="form-check-label" htmlFor="remember-check">
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                        {formError && (
                          <div className='row'>
                            <div className='col'>
                              <p className='text-danger'>* {formError}</p>
                            </div>
                          </div>
                        )}
                        <div className="mb-3">
                          <div type="button" className="btn btn-primary w-100 waves-effect waves-light" onClick={() => {
                            RestAdmin.merchantLogin(email, password)
                              .then(({ user, token }) => {
                                dispatch(stateActions.setUser("merchant", user, token))
                              })
                              .catch(e => setFormError(e.message))
                          }}>
                            Log In
                          </div>
                        </div>
                      </Form>

                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">Don't have an account ? <Link to="/merchant/register"
                          className="text-primary fw-semibold"> Signup now </Link> </p>
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
export default Login;  
