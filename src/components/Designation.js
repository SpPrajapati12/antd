import { Breadcrumb, Button, Form, Popconfirm, Space, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { DeleteOutlined } from '@ant-design/icons'

import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDesignation, loadDesignation } from '../redux/action'

const Designation = (props) => {
    const {designation} = useSelector((state) => state.department);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDesignation())
    }, [])
    console.log(designation);

    const deleteTableRows = (id) => {
        if (window.confirm("Are You sure wanted to delete")) {
            dispatch(deleteDesignation(id));
          } 
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
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
                            Designation
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/admin">Admin</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Link to="/designation">Designation</Link>
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
                                        <h3>Designation</h3>
                                            <Button type="primary" >
                                                <Link to="/designation/add"> Add Designation</Link>
                                            </Button>
                                    </div>
                                    <Table dataSource={designation} columns={columns} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>

        </Content>
    )
}

export default Designation