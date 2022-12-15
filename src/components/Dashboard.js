import React from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Link } from 'react-router-dom'
import { CanvasJSChart } from "canvasjs-react-charts";
import "../common/dashboard.css"

const Dashboard = () => {
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            title: "Social Network",
            reversed: true,
        },
        axisY: {
            title: "Monthly Active Users",
            includeZero: true,
            // labelFormatter: this.addSymbols
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y: 2200000000, label: "Facebook" },
                { y: 1800000000, label: "YouTube" },
                { y: 800000000, label: "Instagram" },
                { y: 563000000, label: "Qzone" },
                { y: 376000000, label: "Weibo" },
                { y: 336000000, label: "Twitter" },
                { y: 330000000, label: "Reddit" }
            ]
        }]
    }
    return (
        <Content className="site-layout">
            <div className="contentpart">
                <Content>
                    <div className="right_content_col">
                        <div className="pagename">
                            Dashboard
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/Home">Home</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="content_wraper dashboardPage" id="selectwrp">
                            <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    minHeight: 380,
                                    width: "100%"
                                }}>
                                 <Row gutter={[24]}>
                                    <Col xs={24}><CanvasJSChart options={options}/></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        </Content>
    )
}

export default Dashboard