import React, { useState } from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddNew = () => {
    const history = useNavigate()
    const [data, setData] = useState({

        docNo: "",
        docDate: "",
        transportStartTime: "",
        goodsTravilingByMeans: "",
        sanderAddress: "",
        agentInCharge: "",
        status: "",
        recipientName: "",
        recipientaddress: "",
        recipientPostalCode: "",
        recipientCity: "",
        recipientProvince: "",
        recipientNation: "",
        goodDestinationAddress: "",
        goodDestinationPostalCode: "",
        goodsDestinationCity: "",
        goodDestinationProvince: "",
        goodDestinationNation: "",
        career1: "",
        career2: "",
        career3: "",
        causal: "",
        externalAppariance: "",
        port: "",
        noPackeges: "",
        annotations: "",
    })
    const user = JSON.parse(localStorage.getItem("user"))
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const submit = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/transport`, data, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            alert(res.data.message)
            history('/dashboard/transports')
        }).catch((err) => { alert(err.response.data.error) })
    }

    return (
        <div>
            <Breadcrumb t="nuovi documenti di trasporto" />
            <div className='content'>
                <div className='container-fluid'>
                    <div>
                        <div className='bg-gray-600 px-2 py-1'>
                            <snap className="text-white font-bold">Nuovo documento di trasporto</snap>
                        </div>
                        <div>
                            <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">DN° Documento</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" onChange={handleChange} name="docNo" />
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Data inizio trasporto</label>
                                    <input style={{ border: "solid gray 1px" }} type="date" onChange={handleChange} name="docDate" />
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Ora inizio trasporto</label>
                                    <input style={{ border: "solid gray 1px" }} type="date" onChange={handleChange} name="transportStartTime" />
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Beni viaggianti a mezzo:</label>
                                    <input style={{ border: "solid gray 1px" }} type="time" onChange={handleChange} name="goodsTravilingByMeans" />
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo mitente</label>
                                    <select style={{ border: "solid gray 1px" }} name="sanderAddress" onChange={handleChange}>
                                        <option></option>
                                        <option value="karachi">karachi</option>
                                        <option value="peshawar">peshawar</option>
                                        <option value="Multan">Multan</option>
                                    </select>
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Agente incaricato</label>
                                    <select style={{ border: "solid gray 1px" }} name="agentInCharge" onChange={handleChange}>
                                        <option></option>
                                        <option value="Mudassir">Mudassir</option>
                                        <option value="uzair">uzair</option>
                                        <option value="ali">ali</option>

                                    </select>
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Status</label>
                                    <select style={{ border: "solid gray 1px" }} name="status" onChange={handleChange}>
                                        <option>--selezionare--</option>
                                        <option value="done">Done</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                            </div>
                            <label className="my-0 py-0">Dati del destinatario</label>
                            <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                                <div className='flex flex-col justify-center w-3/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Denominazione</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="recipientName" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-3/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Selezion altirizzi</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="recipientaddress" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-1/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">CAP</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="recipientPostalCode" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-3/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">
                                        Città</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="recipientCity" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-1/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Provincia
                                    </label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="recipientProvince" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-1/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Nazione</label>
                                    <select style={{ border: "solid gray 1px" }} name="recipientNation" onChange={handleChange}>
                                        <option value="">--selezionare--</option>
                                        <option value="india">India</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="bangladish">Bangladish</option>
                                    </select>
                                </div>
                            </div>
                            <label className="my-0 py-0">Luogo di destinazione dei beni</label>
                            <div className='flex flex-row gap-2 border-2 border-gray-600 my-0 p-1'>

                                <div className='flex flex-col justify-center w-4/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo ( Scegli un indirizzo tra le sedi del Cliente)</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="goodDestinationAddress" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-3/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">CAP</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="goodDestinationPostalCode" onChange={handleChange} />
                                </div>

                                <div className='flex flex-col justify-center w-3/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Città</label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="goodsDestinationCity" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-1/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Provincia
                                    </label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="goodDestinationProvince" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col justify-center w-1/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0" >Nazione</label>
                                    <select style={{ border: "solid gray 1px" }} name="goodDestinationNation" onChange={handleChange} >
                                        <option value="">--selezionare--</option>
                                        <option value="india">India</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="bangladish">Bangladish</option>
                                    </select>
                                </div>
                            </div>

                            <label className="my-0 py-0">Vettori</label>
                            <div className='gap-2 border-2 border-gray-600 mb-2 p-1'>
                                <div className='flex flex-row justify-center w-full my-1'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 1</label>
                                    <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career1" onChange={handleChange} />
                                </div>
                                <div className='flex flex-row justify-center w-full  my-1'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 2</label>
                                    <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career2" onChange={handleChange} />
                                </div>
                                <div className='flex flex-row justify-center w-full  my-1'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 3</label>
                                    <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career3" onChange={handleChange} />
                                </div>
                            </div>
                            <label className="my-0 py-0">OAltri dati</label>
                            <div className='border-2 border-gray-600 mb-2 p-1'>
                                <div className='flex flex-col justify-center w-full'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Causale</label>
                                    <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="causal" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div className='flex flex-row gap-2 w-full'>
                                        <div className='flex flex-col justify-center w-2/5'>
                                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Aspetto esteriore dei beni</label>
                                            <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="externalAppariance" onChange={handleChange} />
                                        </div>
                                        <div className='flex flex-col justify-center w-2/5'>
                                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Porto</label>
                                            <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="port" onChange={handleChange} />
                                        </div>
                                        <div className='flex flex-col justify-center w-1/5'>
                                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">N° colli</label>
                                            <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="noPackeges" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center w-2/2'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Annotazioni</label>
                                        <textarea style={{ border: "solid gray 1px", width: "100%" }} type="text" name="annotations" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex justify-end'>
                                <button className='bg-gray-600 text-white px-4 py-2 font-bold text-sm' onClick={submit}>Salva dati</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNew