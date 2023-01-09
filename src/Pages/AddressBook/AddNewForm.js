import React, { useState } from 'react'
import axios from 'axios'
const ViewForm = () => {
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
    const user = JSON.parse(localStorage.getItem("user"))
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const submit = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/add-address`, data, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            window.location.reload(true)
        }).catch((err) => { alert(err.response.data.error) })
    }
    return (
        <div>
            <div className='mx-1'>
                <diiv className="flex flex-col my-1">
                    <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Nominativo</label>
                    <input type="text" placeholder='nomaanitivo' name="callsign" onChange={handleChange} className="leading-1 mt-0 px-1" style={{ border: "solid gray 1px" }} />
                </diiv>
                <diiv className="flex flex-col my-1">
                    <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Indirizzo</label>
                    <input type="text" placeholder="Indirizzo" name="address" onChange={handleChange} className="leading-1 mt-0 px-1" style={{ border: "solid gray 1px" }} />
                </diiv>
                <div className='flex flex-row w-full gap-2 my-1'>
                    <diiv className="flex flex-col w-1/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>CAP</label>
                        <input type="text" placeholder='CAP' name="postalcode" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} />
                    </diiv>
                    <diiv className="flex flex-col w-1/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Città</label>
                        <input type="text" placeholder='Città' name="city" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} />
                    </diiv>
                    <diiv className="flex flex-col w-4/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Stato</label>
                        <input type="text" placeholder='Stato' name="state" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} />
                    </diiv>
                    <diiv className="flex flex-col w-2/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Provincia</label>
                        <select type="text" name="province" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} value={data.province}>
                            <option value="left">--selezionare Provincia--</option>
                            <option value="Punjab">Punjab</option>
                            <option value="kpk">KPK</option>
                        </select>
                    </diiv>
                </div>
                <div className='flex flex-row w-full gap-2 my-1'>
                    <diiv className="flex flex-col w-3/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Telefono / Cellulare</label>
                        <input type="text" placeholder='Telefono / Cellulare' name="phone" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} />
                    </diiv>
                    <diiv className="flex flex-col w-3/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>E-mail</label>
                        <input type="text" placeholder='Email' name="email" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} />
                    </diiv>
                </div>
                <div className='flex flex-col w-full gap-2 my-2'>
                    <label className='my-0 text-gray-600'>Addational note</label>
                    <textarea className='w-full my-0 px-1 text-gray' name="additionalInfo" onChange={handleChange} style={{ border: "solid gray 1px" }} />
                </div>
                <div className='flex justify-end'>
                    <button className='bg-green-600 text-white px-3 py-1 font-bold text-sm' onClick={submit}>Aggiungere dati modulo</button>
                </div>
            </div>
        </div>
    )
}

export default ViewForm