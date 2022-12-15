import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import logo from "../assets/logo.png"
import { DashboardOutlined, HomeOutlined } from "@ant-design/icons";


const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Sider style={{ backgroundImage: "linear-gradient(to right, #141e30, #243b55)" }} width={250}>
      <Link to="/" className="logo">
        <img className="logoW" alt="logo" src={logo}/>
      </Link>
      <Menu defaultSelectedKeys={['dashboard']} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to="/Home">
            Home
          </Link>
        </Menu.Item>
        <SubMenu title="Masters" key="sub0">
          <Menu.Item key="3" icon={<HomeOutlined />}  >
            <Link to="/admin">
              Admin
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<HomeOutlined />}>
            <Link to="/department">
              Depertment
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<HomeOutlined />}>
            <Link to="/designation">
              Designation
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="User Registration" key="sub1">
          <Menu.Item key="6" icon={<HomeOutlined />}>
            <Link to="/signup">
              Register
            </Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<HomeOutlined />} >
            <Link to="/login">
              login
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Aprovement Authority" key="sub4">
          <Menu.Item key="8" icon={<HomeOutlined />}>
            <Link to="/signup">
              Register
            </Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<HomeOutlined />}>
            <Link to="/login">
              login
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default Sidebar