import React, { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import "../common/common.css"
import logo from "../assets/logo.png"
import { Content } from 'antd/lib/layout/layout'
import Sidebar from './Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const { Header } = Layout


const FrontLayout = () => {


  const [state, setState] = useState({
    visible: false,
    isSidebarHidden: true,
    authUser: "",
    currentRoute: "",
  })

  // const handleMenu = ({ key }) => {
  //   navigate.push(key)
  // }

  const handleSidebar = () => {
    setState({ isSidebarHidden: !state.isSidebarHidden });
  }

  return (
    <Layout>
      {state.isSidebarHidden && <Sidebar />}
      {!state.isSidebarHidden ? (
        <button onClick={handleSidebar} className="sidebarbtn">
          <MenuUnfoldOutlined />
        </button>
      ) : (
        <button
          onClick={handleSidebar}
          className="sidebarbtn close"
        >
          <MenuFoldOutlined />
        </button>
      )}
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            backgroundImage: "linear-gradient(to right, #141e30, #243b55)"
          }}
        >
          <div className="container-fluid">
            <Row align='middle'>
              <Col flex="auto">
                <Link to="/" className="logo">
                  <img className="logoD" alt="logo" src={logo} />
                </Link>
              </Col>
              <Col flex="end">
              </Col>
            </Row>
          </div>
        </Header>
        <Layout>
          <Content>
            <ToastContainer/>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default FrontLayout