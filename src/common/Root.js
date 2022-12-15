


import React, { Component } from 'react'
import Dashboard from '../components/Dashboard'
import Admin from '../components/Admin'
import AdminLayout from './AdminLayout'
import FrontLayout from './FrontLayout'
import { Route, Routes } from 'react-router-dom'
import Department from '../components/Department'
import Designation from "../components/Designation"
import AddDepartment from '../components/AddDepartment'
import Registration from './Registration'
import Home from '../components/Home'
import AddDesignation from '../components/AddDesignation'


export default class Root extends Component {
    render() {
        return (
            <Routes>
                <Route path="/login" element={<AdminLayout />} />
                <Route path="/signup" element={< Registration/>} />
                <Route path="/home" element={< Home/>} />
                <Route element={<FrontLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/department" element={<Department />} />
                    <Route path="/designation" element={<Designation />} />
                    <Route path="/department/add" element={<AddDepartment />} />
                    <Route path="/designation/add" element={<AddDesignation />} />
                </Route>
            </Routes>
        )
    }
}

