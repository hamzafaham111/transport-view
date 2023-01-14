import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import DataTable from 'react-data-table-component'
import Cell from 'react-data-table-component'
import axios from 'axios'
const Transports = () => {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true);
    const [search, setSearch] = useState();
    const [filtered, setFiltered] = useState([])
    const cols = [
        {
            name: "Num. Doc.",
            selector: row => row.docNo
        },
        {
            name: "Data",
            selector: row => (
                row.docDate
            )
        },
        {
            name: "Destinatario / Agente incaricato",
            selector: row => row.agentInCharge
        },

        {
            name: "vista",
            selector: row => <Link to={`view-details/${row._id}`}><i className='ion-eye cursor-pointer text-lg text-green-700'></i></Link>,
            textAlign: 'center',

        },
        {
            name: "Redigere",
            selector: row => <Link to={`edit-document/${row._id}`}><i className='ion-edit cursor-pointer text-lg text-green-700'></i></Link>,
            textAlign: 'center',

        },
        {
            name: "cancellare",
            selector: row => <i className='ion-trash-b text-lg text-red-700 cursor-pointer' onClick={() => { deleteTransport(row._id) }}></i>,

        }
    ]
    const dates = (e) => {
        alert(e.target.value)
        const result = data.filter((val) => {
            return val.docDate.match(e.target.value);
        })
        console.log(result)
        setFiltered(result)
    }
    const user = JSON.parse(localStorage.getItem("user"))
    const deleteTransport = async (val) => {
        await axios.get(`${process.env.REACT_APP_DOMAIN}/delete-transports`, {
            headers: {
                ID: val,
                userID: user._id
            }
        }).then((res) => {
            setData(res.data.data);
        })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/display-transports`, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            setFiltered(res.data.data)
            setData(res.data.data)
            setPending(false);
        })
    }, [])
    useEffect(() => {
        const result = data.filter((val) => {
            return val.docNo.toLowerCase().match(search.toLowerCase());
        })
        setFiltered(result)
    }, [search])
    return (
        <div>
            <Breadcrumb t="Documenti di trasporto" />
            <div className='content'>
                <div className='container-fluid'>
                    <div className='flex flex-row justify-between items-center my-2'>
                        <Link to="add-new-transport" className='bg-gray-600 w-64 flex justify-center my-1 py-1 cursor-pointer'>
                            <i className='ion-plus-round text-white mr-2 text-bold'></i>
                            <span className='text-white text-bold'>Aggiungi nuovo documento</span>
                        </Link>
                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-col'>
                                <label className="text-sm font-medium text-gray-500">Search By Document No</label>
                                <input
                                    type="text"
                                    style={{ border: "solid gray 1px", padding: "0 10px" }}
                                    className="text-sm py-1"
                                    placeholder='Search By Document No'
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className="text-sm font-medium text-gray-500">Search By Year</label>
                                <select style={{ border: "solid gray 1px", padding: "0 10px", color: "gray" }} className="text-sm py-1" onChange={dates}>
                                    <option value="">--select year--</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <DataTable columns={cols} data={filtered} progressPending={pending} pagination />
                </div>
            </div>
        </div>
    )
}

export default Transports