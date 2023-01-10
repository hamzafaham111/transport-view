import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import DataForm from './DataForm';
import MainDetails from './MainDetails';

const AddNew = () => {
    const [condation, setCondation] = useState(true)
    const [tab1, setTabe1] = useState({
        background: "#343A40",
        color: "white",
    })
    const [tab2, setTabe2] = useState({
        background: "transparent",
        color: "gray",
    })
    const handleTabs = () => {
        if (condation) {
            setCondation(false)
            setTabe1({
                background: "transparent",
                color: "#343A40",
            })
            setTabe2({
                background: "#343A40",
                color: "white",
            })
        } else {
            setCondation(true)
            setTabe2({
                background: "transparent",
                color: "#343A40",
            })
            setTabe1({
                background: "#343A40",
                color: "white",
            })
        }
    }
    return (
        <div>
            <Breadcrumb t="nuovi documenti di trasporto" />
            <div className='content'>
                <div className='container-fluid'>
                    <div>
                        <div className='mb-1'>
                            <snap className=" font-bold px-2 py-1 mr-1 cursor-pointer hover:bg-gray-400" style={tab1} onClick={handleTabs}>Data Principali</snap>
                            <snap className=" font-bold px-2 py-1 cursor-pointer hover:bg-gray-400 " style={tab2} onClick={handleTabs}>Linee di dettaglio</snap>
                        </div>
                        {
                            condation ? <DataForm /> : <MainDetails />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNew