import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Layout, Row } from 'antd'
import Password from 'antd/lib/input/Password'
import Sider from 'antd/lib/layout/Sider'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import hlogo from "../assets/logo.png"
import "../common/adminLayout.css"

const { Header, Content,  } = Layout


const AdminLayout = () => {
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
      <div className="login-panel">
        <Content className="site-layout">
          <div className="contentpart">
            <img src="https://www.worldatlas.com/r/w960-q80/upload/0c/d7/f1/shutterstock-172352450.jpg" alt="" />
          </div>
        </Content>
        <Sider >
          <div className="login-child-container">
            <div className='child-panel'>
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
            <Content>
              <div className="login-panel-Advertisement">
                <h3>Advertisement</h3>
              </div>
            </Content>
          </div>
        </Sider>
      </div>

      {/* <div className="authPage">
        <div className="container">
            <div className="login_wraper">
            <Row className="login_inr_wrp">
              <Col className="loginimg_div">
                <img alt="logo" style={{ width: "100%", height: "382px" }} src={logo} />
              </Col>
              <Col className="formdiv">
                <div className="pagename">
                  <span>Login</span>
                </div>
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
                          Don't Have An Account Yet? <span>Sign Up</span>
                        </Link>
                      </div>
                      <div className="btnparent two">
                        <Link to="/verify-account" className="button-link">
                          Didn't Verify Account Yet? <span> Verify</span>
                        </Link> 
                        <Link to="/forgot-password" className="button-link">
                          Forgot Password <span>Reset</span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            </div>
        </div>
       </div> */}
    </div>
  )
}

export default AdminLayout