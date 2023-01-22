import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Master = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div>
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Master