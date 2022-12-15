import { Breadcrumb, Button, Form, Popconfirm, Space, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { DeleteOutlined } from '@ant-design/icons'

import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, loadUsers } from '../redux/action'


const Department = (props) => {
    const {department} = useSelector((state) => state.department);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])
    

    // console.log(department);

    const deleteTableRows = (id) => {
        if (window.confirm("Are You sure wanted to delete")) {
            dispatch(deleteUsers(id));
          }
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'depertment',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: "right",
            width: 100,
            render: (res, record) => {
                return (
                    <Space size="middle">
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
    ];

    return (
        <Content className="site-layout">
            <div className="contentpart">
                <Content>
                    <div className="right_content_col">
                        <div className="pagename">
                            Depertment
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Link to="/admin">Admin</Link>
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
                                    <div className="department-panel">
                                        <h3>Department</h3>
                                            <Button type="primary" >
                                                <Link to="/department/add"> Add Department</Link>
                                            </Button>
                                    </div>
                                    <Table dataSource={department} columns={columns} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>

        </Content>
    )
}

export default Department