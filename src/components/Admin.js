import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Col, Form, Input, Popconfirm, Row, Select, Space, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../common/dashboard.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { addAdmin, deleteAdmin, loadAdmin, loadDesignation, loadUsers } from '../redux/action'

const Admin = () => {
    const {department,designation,admin} = useSelector((state) => state.department);
    const dispatch = useDispatch();

    const formRef = useRef()

    const initState = {
        name: "",
        department: "",
        designation : ""
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [state, setState] = useState(initState)

    const [searchTerm,setSearchTerm] = useState("")


    useEffect(() => {
        dispatch(loadUsers())
        dispatch(loadDesignation())
        dispatch(loadAdmin())
    }, [])



    // const onSelectChange = (newSelectedRowKeys) => {
    //     console.log('selectedRowKeys changed: ', selectedRowKeys)
    //     setSelectedRowKeys(newSelectedRowKeys)
    // }

    const searchOnChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const search = (data) => {
        return  data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }


    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: "right",
            width: 100,
            render: (res, record) => {
                return (

                    <Space size="middle">
                        {/* <Link to="/"><EditOutlined /></Link> */}
                        <Popconfirm
                            title="Please conform to delete"
                            onConfirm={() => deleteTableRows(res.id)}
                        >
                            <DeleteOutlined />
                        </Popconfirm>
                    </Space>
                )
            }
        },
    ]

    const handleChange = (field, value) => {
        setState({ ...state, [field]: value.target.value })
    }

    const handleSelectChange = (field, value) => {
        setState({ ...state, [field]: value });
    };

    
    const handleSubmit = () => {
        console.log('submit');
        if(!state.name || !state.designation || !state.department) {
            console.log("Please enter all input field ")
        } else {
            dispatch(addAdmin(state))
            toast("Successfully")
            formRef.current.setFieldsValue(initState)
            setState(initState)
        }
    }

    const deleteTableRows = (id) => {
        if (window.confirm("Are You sure wanted to delete")) {
            dispatch(deleteAdmin(id));
          }
    }
    return (
        
        <Content className="site-layout">
            
            <div className="contentpart">
                <Content>
                    <div className="right_content_col">
                        <div className="pagename">
                            Admin
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="content_wraper dashboardPage" id="selectwrp">
                            <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    minHeight: 218,
                                }}>
                                <div className="heading">
                                    <h3>Admin Panel</h3>
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
                                                    <label htmlFor="name">Name</label>
                                                    <Form.Item
                                                        name="name"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please input your name!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder='Name' value={state.name} onChange={(e) => handleChange("name", e)} />
                                                    </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={12} lg={8} xl={8} xxl={4}>
                                                    <label htmlFor="department">Department</label>
                                                    <Form.Item
                                                        name="department"
                                                    >
                                                        <Select
                                                            allowClear
                                                            showSearch
                                                            getPopupContainer={() => document.getElementById("selectwrp")}
                                                            showArrow
                                                            maxTagCount="responsive"
                                                            placeholder="Department"
                                                            defaultValue=""
                                                            onChange={(value) => handleSelectChange("department", value)}
                                                            optionFilterProp="children"
                                                        >
                                                            <Select.Option value="">
                                                                --Select Options--
                                                            </Select.Option>
                                                            {department.map((data, key) => {
                                                                return (
                                                                    <Select.Option key={key} value={data.department}>
                                                                        {data.department}
                                                                    </Select.Option>
                                                                );
                                                            })}
                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={12} lg={8} xl={8} xxl={4}>
                                                    <label htmlFor="designation">Designation</label>
                                                    <Form.Item
                                                        name="designation"
                                                    >
                                                        <Select
                                                            allowClear
                                                            showSearch
                                                            getPopupContainer={() => document.getElementById("selectwrp")}
                                                            showArrow
                                                            maxTagCount="responsive"
                                                            placeholder="Department"
                                                            defaultValue=""
                                                            onChange={(value) => handleSelectChange("designation", value)}
                                                            optionFilterProp="children"
                                                        >
                                                            <Select.Option value="">
                                                                --Select Options--
                                                            </Select.Option>
                                                            {designation.map((data, key) => {
                                                                return (
                                                                    <Select.Option key={key} value={data.designation}>
                                                                        {data.designation}
                                                                    </Select.Option>
                                                                );
                                                            })}
                                                        </Select>
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
                            <div className="table-content">
                                <Row gutter={[24]}>
                                    <Col xs={6}  >
                                    <label htmlFor="search">Search</label>
                                                    <Form.Item
                                                        name="name"
                                                    >
                                                        <Input placeholder='search' value={state.name} onChange={searchOnChange} />
                                                    </Form.Item>
                                    </Col>
                                    <Col xs={24}  >
                                        <Table bordered scroll={{ x: 450 }} dataSource={search(admin)} columns={columns} rowKey={(record => record.id)} />
                                    </Col>
  
                                </Row>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        </Content>
    )
}

export default Admin