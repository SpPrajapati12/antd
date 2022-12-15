import { Breadcrumb, Button, Col, Form, Input, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUsers } from '../redux/action'

const AddDepartment = () => {
    const formRef = useRef()

    const navigate = useNavigate()
    const dispatch = useDispatch()



    const initState = {
        department: "",
    }

    const [state, setState] = useState(initState)
    const [error,setError] = useState("")


    const handleChange = (field, value) => {
        setState({ ...state, [field]: value.target.value })
    }

    const handleSubmit = () => {
        if(!state.name === "") {
            setError("Please enter all input field ")
        } else {
            console.log("error");
            dispatch(addUsers(state))
            navigate("/department")
            setState(initState)
            setError("")
        }
    }
  return (
    <Content className="site-layout">
    <div className="contentpart">
        <Content>
            <div className="right_content_col">
                <div className="pagename">
                Add Department
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/dashboard">Dashboard</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/department">Department</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="content_wraper dashboardPage" id="selectwrp">
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 380,
                        }}>
                         <div className="heading">
                                    <h3>Add Department</h3>
                                    <div className="panel-description">
                                        <Form
                                            name="basic"
                                            ref={formRef}
                                            layout='verticle'
                                            onFinish={handleSubmit}
                                            autoComplete="off"
                                        >
                                            <Row gutter={[16]}>
                                                <Col xs={24} sm={12} lg={8} xl={8} xxl={4}>
                                                    <label htmlFor="name">Department</label>
                                                    <Form.Item
                                                        name="department"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please input your department!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input onChange={(e) => handleChange("department", e)} />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row align='right'>
                                                <Form.Item
                                                >
                                                    <Button type="primary" htmlType="submit">
                                                        Add User
                                                    </Button>
                                                </Form.Item>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </Content>
    </div>

</Content>
  )
}

export default AddDepartment