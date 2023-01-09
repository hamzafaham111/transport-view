import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import ViewForm from './ViewForm'
import AddNewForm from './AddNewForm'
import axios from 'axios'
const AddressBook = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState();
    const [callsign, setCallsign] = useState([]);
    const [filtered, setFiltered] = useState([])
    const data1 = [
        {
            id: 1,
            name: "Hamza Faham",
            indirizoo: "Hadrians",
            CAP: "9000",
            Citta: "Moraan",
            email: "hamzafaham111@gmail.com",
            state: "Pakistan"
        },
        {
            id: 2,
            name: "Aziz Ur Rehaman",
            indirizoo: "Alwazi",
            CAP: "78000",
            Citta: "Mokaan",
            email: "azizurrehman123@gmail.com",
            state: "Banglahash"
        },
        {
            id: 3,
            name: "Janice",
            indirizoo: "Hadrians",
            CAP: "9000",
            Citta: "Moraan",
            email: "krjaneice444@gmail.com",
            state: "New Zeland"
        },
        {
            id: 4,
            name: "Hildha",
            indirizoo: "Hadrians",
            CAP: "9000",
            Citta: "Moraan",
            email: "hildha111@gmail.com",
            state: "Indonasia"
        },

    ]
    const [heading, setHeading] = useState('');
    const [condation, setCondation] = useState(0);
    const [viewData, setViewData] = useState({})
    const handleNewForm = () => {
        setCondation(1)
        setHeading("Add New User")
    }
    const selectByCallsignes = (e) => {
        setData(data)
        const sorted = data.filter((val) => {
            return val.callsign == e.target.value;
        })
        setFiltered(sorted)
    }

    const view = (val) => {
        setHeading("vista");
        setCondation(2);

        const ID = val;
        const found = data.filter((data) => data._id.includes(ID));

        setViewData(found);
        console.log(found)
    };
    const user = JSON.parse(localStorage.getItem("user"))
    const deleteAddress = async (val) => {
        window.event.stopPropagation();
        axios.get(`${process.env.REACT_APP_DOMAIN}/delete-address`, {
            headers: {
                ID: val
            }
        }).then((res) => {
            window.location.reload(true)
            setData(res.data.data);
        })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/display-addresses`, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            setData(res.data.data)
            setFiltered(res.data.data)
            setCallsign(res.data.callsignes)
        })
    }, [])

    useEffect(() => {
        const result = data.filter((address) => {
            return address.callsign.toLowerCase().match(search.toLowerCase());
        })
        setFiltered(result)
    }, [search])
    return (
        <div>
            <Breadcrumb t="Rubrica" />
            <div className='content'>
                <div className='container-fluid'>
                    <div className='flex flex-row gap-2'>
                        <div className='w-2/6 min-h-screen border-2 border-gray-600'>
                            <div className='bg-gray-600 py-2 flex justify-between px-2'>
                                <snap className="font-bold text-white">Lista voci in rubrica</snap>
                                <i className='ion-plus-round text-white cursor-pointer' onClick={handleNewForm}></i>
                            </div>
                            <div className='flex gap-2 my-1 mx-1'>
                                <select className='px-1 outline-none' style={{ border: "solid gray 1px" }} onChange={selectByCallsignes}>
                                    <option>Nominative</option>
                                    {
                                        callsign.map((val) => {
                                            return (
                                                <option value={val}>{val}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input
                                    type="text"
                                    className='w-full p-1 outline-none'
                                    style={{ border: "solid gray 1px" }}
                                    placeholder='search'
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                />
                            </div>
                            <div className='mx-1'>
                                {

                                    filtered.map((val, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className=" bg-gray-200 py-1 px-2 cursor-pointer hover:text-white hover:bg-gray-600 my-1 w-full flex justify-between"
                                                onClick={() => view(val._id)}
                                                style={{ border: "solid gray 1px" }}
                                            >
                                                <div>
                                                    <span className="pr-2">{i + 1}</span>
                                                    <span>{val.callsign}</span>
                                                </div>
                                                <div>
                                                    <i
                                                        className="ion-trash-b mx-2 text-lg text-red-900 hover:text-red-500"
                                                        onClick={() => {
                                                            deleteAddress(val._id);
                                                        }}
                                                    ></i>
                                                </div>
                                            </div>
                                        );
                                    })

                                }
                            </div>
                        </div>
                        <div className='w-4/6 bg-transparent border-2 border-gray-600'>
                            <div className='bg-gray-600 py-2'>
                                <snap className="font-bold text-white px-2">
                                    {heading}
                                </snap>
                            </div>
                            {
                                condation === 0 ? <></> : condation === 1 ? < AddNewForm /> : < ViewForm cb={setHeading} data={viewData} disabled={true} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddressBook