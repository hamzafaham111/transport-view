import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import DataTable from 'react-data-table-component'
import Cell from 'react-data-table-component'
import axios from 'axios'
const Transports = () => {
    const [data, setData] = useState([])
    const cols = [
        {
            name: "Num. Doc.",
            selector: row => row.docNo
        },
        {
            name: "Data",
            selector: row => row.docDate
        },
        {
            name: "Destinatario / Agente incaricato",
            selector: row => row.agentInCharge
        },
        // {
        //     name: "Goods Value",
        //     selector: row => row.value
        // },
        // {
        //     name: "Associated invoices",
        //     selector: row => row.invoice
        // },
        // {
        //     name: "Relations",
        //     selector: row => row.relations
        // },
        // {
        //     name: "download",
        //     selector: row => <div><i className='ion-android-download text-lg text-orange-700 cursor-pointer'></i></div>,
        // },
        {
            name: "vista",
            selector: row => <Link to={`view-details/${row._id}`}><i className='ion-eye cursor-pointer text-lg text-green-700'></i></Link>,
            textAlign: 'center',

        },
        {
            name: "cancellare",
            selector: row => <i className='ion-trash-b text-lg text-red-700 cursor-pointer' onClick={() => { deleteTransport(row._id) }}></i>,

        }
    ]
    const data1 = [
        {
            docNo: "",
            date: "",
            recipient: "",
            value: "",
            invoice: "",
            relations: "",
        }
    ]
    const user = JSON.parse(localStorage.getItem("user"))
    const deleteTransport = async (val) => {
        await axios.get(`${process.env.REACT_APP_DOMAIN}/delete-transports`, {
            headers: {
                ID: val,
                userID: user._id
            }
        }).then((res) => {

            console.log(res.data.data)
            setData(res.data.data);
        })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/display-transports`, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        })
    }, [])
    return (
        <div>
            <Breadcrumb t="Documenti di trasporto" />
            <div className='content'>
                <div className='container-fluid'>
                    <Link to="add-new-transport" className='bg-gray-600 w-64 flex justify-center my-1 py-1 cursor-pointer'>
                        <i className='ion-plus-round text-white mr-2 text-bold'></i>
                        <span className='text-white text-bold'>Aggiungi nuovo documento</span>
                    </Link>
                    <DataTable columns={cols} data={data} />
                    {/* <div className='bg-gray-600 py-1 px-2 flex justify-between'>
                        <span className='font-bold text-white'>Transports List</span>
                        <input type="text" placeholder='search' className='px-2' />
                    </div>
                    <div className='flex justify-between items-center bg-gray-200 py-2 text-gray-600 px-2 my-1 hover:bg-gray-600 hover:text-gray-100 cursor-pointer' style={{ border: "solid gray 1px" }}>
                        <span className='font-medium'>Reels are important</span>
                        <i className='ion-android-download text-2xl my-0'></i>
                    </div>
                    <div className='flex justify-between items-center bg-gray-200 py-2 text-gray-600 px-2 my-1 hover:bg-gray-600 hover:text-gray-100 cursor-pointer' style={{ border: "solid gray 1px" }}>
                        <span className='font-medium'>Lahroe transport faculity</span>
                        <i className='ion-android-download text-2xl my-0'></i>
                    </div>
                    <div className='flex justify-between items-center bg-gray-200 py-2 text-gray-600 px-2 my-1 hover:bg-gray-600 hover:text-gray-100 cursor-pointer' style={{ border: "solid gray 1px" }}>
                        <span className='font-medium'>Migration</span>
                        <i className='ion-android-download text-2xl my-0'></i>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Transports