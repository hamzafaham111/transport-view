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
    const [years, setYears] = useState([])
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
        const result = data.filter((val) => {
            return val.docDate.match(e.target.value);
        })
        setFiltered(result)
    }
    const user = JSON.parse(localStorage.getItem("user"))
    const deleteTransport = async (val) => {

        if (window.confirm("Are you sure you want to delete this item?")) {
            await axios.get(`${process.env.REACT_APP_DOMAIN}/delete-transports`, {
                headers: {
                    ID: val,
                    userID: user._id
                }
            }).then((res) => {
                setData(res.data.data);
                window.location.reload(true)
            })
        }
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/display-transports`, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            setFiltered(res.data.data)
            setData(res.data.data)
            setYears(res.data.dates)
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
                                <label className="text-sm font-medium text-gray-500">Ricerca per documento n.</label>
                                <input
                                    type="text"
                                    style={{ border: "solid gray 1px", padding: "0 10px" }}
                                    className="text-sm py-1"
                                    placeholder='Ricerca per documento n.'
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className="text-sm font-medium text-gray-500">Ricerca per anni</label>
                                <select style={{ border: "solid gray 1px", padding: "0 10px", color: "gray" }} className="text-sm py-1" onChange={dates}>
                                    <option value="">--seleziona l'anno--</option>
                                    {
                                        years.map((val) => {
                                            return (<option value={val}>{val}</option>)
                                        })
                                    }
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