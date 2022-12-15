import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Layout, Row } from 'antd'
import Password from 'antd/lib/input/Password'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hlogo from "../assets/logo.png"
import "../style/home.css"
const { Header } = Layout


const Home = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({ email: "", password: "", captcha: "" });

  const handleChange = (field, value) => {
    setState({ ...state, [field]: value.target.value });
  };
  const handleSubmit = () => {
    navigate("/admin")
  };

  return (
    <div className="login-container">
      <div className="header-container">
        <Header style={{ width: "100%", backgroundImage: "linear-gradient(to right, #141e30, #243b55)" }}>
          <div className="container">
            <Row align="middle">
              <Col flex="auto" align="start">
                <Link to="/" className="logo">
                  <img src={hlogo} alt="logo" />
                </Link>
              </Col>
              <Col align="end" className="rightside">
                <Link to="/" className="logo">
                  <h1>Logo</h1>
                </Link>
              </Col>
            </Row>
          </div>
        </Header>
      </div>
      <div className="home-container">
        <Row gutter={[16]}>
          <Col xs={24} sm={16} lg={18} xl={18} xxl={18}>
            <div className="home-information">
              <div className="information-container">
                <div className="information">
                  <div className="info-heading">
                    <h2>Current Information</h2>
                  </div>
                  <div className="info-panel">
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Final Result of Advt. No. 122/2020-21 Joint Charity Commissioner, Class-1 </Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Detailed Interview Programme of Advt. No. 71/2020-21, Gujarat Engineering Service, Class-1 and Class-2, Narmada and Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> List of Eligible Candidates for Interview of Advt. No. 143/2020-21, Lecturer (Homoeopathy) Repertory, Class-2, General State Service, Class-2, Government Homoeopathy Colleges</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Detailed Interview Programme of Advt. No. 122/2020-21, Joint Charity Commissioner, Class-1 </Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Detailed Interview Programme of Advt. No. 94/2019-20, Assistant Professor, Physiology, General State Service, Class-1 (Special Recruitment) </Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>

                  </div>
                </div>
              </div>
              <div className="information-container" style={{marginTop : 0, marginBottom :"30px"}} >
                <div className="information" style={{marginBottom : "30px"}}>
                  <div className="info-heading">
                    <h2>Current Information</h2>
                  </div>
                  <div className="info-panel">
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Final Result of Advt. No. 122/2020-21 Joint Charity Commissioner, Class-1 </Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Detailed Interview Programme of Advt. No. 71/2020-21, Gujarat Engineering Service, Class-1 and Class-2, Narmada and Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> List of Eligible Candidates for Interview of Advt. No. 143/2020-21, Lecturer (Homoeopathy) Repertory, Class-2, General State Service, Class-2, Government Homoeopathy Colleges</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Detailed Interview Programme of Advt. No. 122/2020-21, Joint Charity Commissioner, Class-1 </Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Detailed Interview Programme of Advt. No. 94/2019-20, Assistant Professor, Physiology, General State Service, Class-1 (Special Recruitment) </Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>
                    <div className="panel-desc">
                      <Link to={"/"}> <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span> Provisional Answer Key, Advt. No. 09/2022-23, Geologist, Class-2, (Special Recruitment) Narmada Water Resources, Water Supply and Kalpsar Department</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={8} lg={6} xl={6} xxl={6} >
            <div className="home-advertisement">
              <div className="advertisement-panel">
                <h3>Login</h3>
                <Form onFinish={handleSubmit} autoComplete="off">
                  <Row>
                    <Col xs={24}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Enter valid email",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                          placeholder="email"
                          onChange={(value) => handleChange("email", value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Enter a Password",
                          },
                          {
                            pattern: new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{9,})"),
                            message: "Please fill 8 character Strong Password",
                          }
                        ]}
                      >
                        <Password
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="password"
                          onChange={(value) => handleChange("password", value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="loginbtn"
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <div className="btnparent">
                        <Link to="/register" className="button-link">
                          Don't Have An Account? <span>Sign Up</span>
                        </Link>
                      </div>
                      <div className="btnparent two">
                        <Link to="/forgot-password" className="button-link">
                          Forgot Password  <span>Reset</span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="faqs_container">
              <Button type='primary ' className='faq_btn' > How to Apply </Button>
              <Button type='primary' className='faq_btn' > How to Register </Button>
              <Button type='primary' className='faq_btn' > Help/Query </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home