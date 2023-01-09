import React, { useState, useEffect } from 'react'
import axios from 'axios'
const ViewForm = (Props) => {
    const [edit, setEdit] = useState(true)
    const userData = Props.data;
    const [data, setData] = useState({
        callsign: "",
        address: "",
        postalcode: "",
        city: "",
        state: "",
        province: "",
        phone: "",
        email: "",
        additionalInfo: "",
    })
    useEffect(() => {
        setData(Props.data[0])
        setEdit(Props.disabled)
    }, [Props])
    const handleEdit = () => {
        setEdit(false)
        Props.cb("Modifica dati")
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })

    }
    const saveData = async () => {

        await axios.post(`${process.env.REACT_APP_DOMAIN}/update-address`, data, {
            headers: {
                ID: data._id
            }
        }).then((res) => {
            alert("Data updated successfully")
            window.location.reload(true)
            setData(res.data.data)
        }).catch((err) => { alert(err.response.data.error) })
        setEdit(true)
        Props.cb("vista")
    }
    return (
        <div>
            <div className='mx-1'>
                <diiv className="flex flex-col my-1">
                    <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Nominativo:</label>
                    <input type="text" disabled={edit} onChange={handleChange} name="callsign" value={data.callsign} className="leading-1 mt-0 px-1" style={{ border: "solid gray 1px" }} />
                </diiv>
                <diiv className="flex flex-col my-1">
                    <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Indirizzo:</label>
                    <input type="text" disabled={edit} className="leading-1 mt-0 px-1" onChange={handleChange} name="address" style={{ border: "solid gray 1px" }} value={data.address} />
                </diiv>
                <div className='flex flex-row w-full gap-2 my-1'>
                    <diiv className="flex flex-col w-1/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>CAP:</label>
                        <input type="text" disabled={edit} className="leading-1 mt-0 px-1 text-gray" onChange={handleChange} name="postalcode" style={{ border: "solid gray 1px" }} value={data.postalcode} />
                    </diiv>
                    <diiv className="flex flex-col w-1/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Città:</label>
                        <input type="text" disabled={edit} className="leading-1 mt-0 px-1 text-gray" onChange={handleChange} name="city" style={{ border: "solid gray 1px" }} value={data.city} />
                    </diiv>
                    <diiv className="flex flex-col w-2/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Stato</label>
                        <select type="text" disabled={edit} onChange={handleChange} name="state" className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} value={data.state}>
                            <option>Pakistan</option>
                        </select>
                    </diiv>
                    <diiv className="flex flex-col w-2/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Provincia</label>
                        <select type="text" disabled={edit} onChange={handleChange} name="province" className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} value={data.province}>
                            <option>Punjab</option>
                        </select>
                    </diiv>
                </div>
                <div className='flex flex-row w-full gap-2 my-1'>
                    <diiv className="flex flex-col w-3/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Telefono / Cellulare</label>
                        <input type="text" disabled={edit} className="leading-1 mt-0 px-1 text-gray" onChange={handleChange} name="phone" style={{ border: "solid gray 1px" }} value={data.phone} />
                    </diiv>
                    <diiv className="flex flex-col w-3/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Email</label>
                        <input type="text" disabled={edit} onChange={handleChange} name="email" className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} value={data.email} />
                    </diiv>
                </div>
                <div className='flex flex-col w-full gap-2 my-2'>
                    <label className='my-0 text-gray-600'>Addational note</label>
                    <textarea className='w-full my-0 px-1 text-gray' onChange={handleChange} name="additionalInfo" style={{ border: "solid gray 1px" }} value={data.additionalInfo} disabled={edit} />
                </div>
                <div className='mt-4 flex justify-end'>
                    {edit ?
                        <button className='bg-gray-600 text-white px-3 py-1 font-bold text-sm' onClick={handleEdit}>Modifica dati</button> :
                        <button className='bg-gray-600 text-white px-3 py-1 font-bold text-sm' onClick={saveData}>Salva aggiornamenti</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewForm