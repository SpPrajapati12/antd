import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Layout, Row } from 'antd'
import Password from 'antd/lib/input/Password'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hlogo from "../assets/logo.png"
import logo from "../assets/background.jpg"
import "../common/adminLayout.css"

const { Header } = Layout


const Registration = () => {
  const navigate = useNavigate()
  
  const initialState = {
    name : "",
    userName : "",
    phone : "",
    email : "",
    password : "",
  }
  const [state, setState] = useState(initialState);


  const handleChange = (field, value) => {
    setState({ ...state, [field]: value.target.value });
  };
  const handleSubmit = () => {
    alert("Registration Successfully")
    navigate("/dashboard")
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
      <div className="authPage">
        <div className="container">
          <div className="login_wraper">
            <Row className="login_inr_wrp">
              <Col className="formdiv">
                <div className="pagename">
                  <span>Registeration</span>
                </div>
                <Form onFinish={handleSubmit} autoComplete="off">
                  <Row>
                    <label>Name :</label>
                    <Col xs={24}>
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Enter a Name",
                          }
                        ]}
                      >
                        <Input
                          // prefix={
                          //   <MailOutlined className="site-form-item-icon" />
                          // }
                          placeholder="name"
                          onChange={(value) => handleChange("name", value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <label>UserName :</label>
                    <Col xs={24}>
                      <Form.Item
                        name="userName"
                        rules={[
                          {
                            required: true,
                            message: "Enter a UserName",
                          },
                        ]}
                      >
                        <Input
                          placeholder="username"
                          onChange={(value) => handleChange("userName", value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <label>Mobile No :</label>
                    <Col xs={24}>
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Enter mobile number",
                          },{
                            pattern : ("^[0-9]{10}$"),
                            message : "Enter valid mobile number"
                          }
                        ]}
                      >
                        <Input
                          placeholder="mobile no."
                          onChange={(value) => handleChange("phone", value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <label>Email :</label>
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
                    <label>Password :</label>
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
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration