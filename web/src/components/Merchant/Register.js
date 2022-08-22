import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Alert, Container, Form, label } from "react-bootstrap"
import logo from "../../assets/images/logo-sm.png";
import Style from './DashboardStyle';
import { RestAdmin, RestMerchant } from "../../rest";
import { useEffect, useState } from "react";
import useMerchantAuth from "../../hooks/useMerchantAuth";
import { useDispatch } from "react-redux";
import { stateActions } from "../../redux/stateActions";

function Register() {

  const navigate = useNavigate()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmedPassword] = useState()
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const isMerchant = useMerchantAuth();

  useEffect(() => {
    if (isMerchant === true) navigate("/merchant/dashboard")
  }, [isMerchant])

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitFormAction = (e) => {
    e.preventDefault()
    if (!firstName || firstName.length < 3) {
      setError(`Please enter a valid First Name`)
    } else if (!lastName || lastName.length < 3) {
      setError(`Please enter a valid Last Name`)
    } else if (!email || !validateEmail(email)) {
      setError(`Please enter a valid Email`)
    } else if (!password || password.length < 4) {
      setError(`Please enter a valid Password`)
    } else {
      if (password !== confirmPassword) {
        setError(`Passwords do not match`)
      } else {
        RestAdmin.merchantSignup(email, password).then((res) => {
          console.log(`Got 1`)
          console.log(res)
          RestAdmin.merchantLogin(email, password).then(({ user, token }) => {
            console.log(`Got 2`)
            user.firstName = firstName;
            user.lastName = lastName;
            RestMerchant.updateMerchant(user, token).then((res) => {
              console.log(`Got 3`)
              console.log(res)
              dispatch(stateActions.setUser("merchant", user, token))
              //navigate(`/merchant/dashboard`)
            }).catch(e => setError(e.message))
          }).catch(e => setError(e.message))
        }).catch(e => {
          console.error(e)
          setError(`Registration Failed`)
        })
      }
    }
  }


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
                    <div className="mb-2 text-center">
                      <Link to="/dashboard" className="d-block auth-logo">
                        <img src={logo} alt="" height="53" />
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Register Account !</h5>
                        <p className="text-muted mt-2">Sign up to continue to DBHouz</p>
                      </div>
                      <Form className="formStyle signUpForm mt-4 pt-2">
                        <div className="mb-4">
                          <label htmlFor="firstNameFld" className="form-label">First Name</label>
                          <input onChange={(e) => { setFirstName(e.target.value) }} value={firstName} type="firstName" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="firstNameFld" className="form-label">Last Name</label>
                          <input onChange={(e) => { setLastName(e.target.value) }} value={lastName} type="lastName" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="EmailFld" className="form-label">Email</label>
                          <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className="form-control" placeholder="merchant@dbhouz.com" />
                        </div>
                        {/* <div className="mb-4">
                          <label htmlFor="firstNameFld" className="form-label">Username*</label>
                          <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className="form-control" placeholder="Duple IT " />
                        </div> */}
                        <div className="mb-4">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Password</label>
                            </div>
                          </div>
                          <div className="mb-3">
                            <input
                              name="password"
                              value={password}
                              type="password"
                              className="form-control"
                              required
                              onChange={(e) => { setPassword(e.target.value) }}
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Confirm Password</label>
                            </div>
                          </div>
                          <div className="mb-3">
                            <input
                              name="confirmPassword"
                              value={confirmPassword}
                              type="password"
                              className="form-control"
                              required
                              onChange={(e) => { setConfirmedPassword(e.target.value) }}
                              placeholder="Confirm Password"
                            />
                          </div>
                          {/* <div className="mb3">
                          <div className="form-group">
                          <Form.Label>Gst Number Upload</Form.Label>
                              <div className="uplogInrDiv"> 
                                <input  type="file"  multiple  className="form-control fileUpload  form-control-lg" /> 
                                  <div className="uploadBlkInr">
                                      <div className="uploadFileCnt">
                                          <p>Document Upload</p>
                                      </div>
                                  </div>
                              </div>                    
                          </div>                                                
                      </div>
                      <div className="mb3 pt-3">
                          <div className="form-group">
                          <Form.Label>Pan Card Upload</Form.Label>
                              <div className="uplogInrDiv"> 
                                <input  type="file"  multiple  className="form-control fileUpload  form-control-lg" /> 
                                  <div className="uploadBlkInr">
                                      <div className="uploadFileCnt">
                                          <p>Document Upload</p>
                                      </div>
                                  </div>
                              </div>                    
                          </div>                                                
                      </div> */}
                        </div>
                        {(error) && (
                          <p className="text-danger">* {error}</p>
                        )}
                        <div className="my-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            onClick={submitFormAction}>Submit</button>
                        </div>
                      </Form>

                      <div className="mt-2 text-center">
                        <p className="text-muted mb-0">Already have an account ?  <Link to="/merchant/login"
                          className="text-primary fw-semibold"> Login </Link> </p>
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

export default Register;  
