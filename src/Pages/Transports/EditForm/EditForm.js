import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Breadcrumb from '../../../components/Breadcrumb';
const EditForm = () => {
    const history = useNavigate()
    const [data, setData] = useState({
        user_ref: "",
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
    const { documentID } = useParams();
    const [recipitentData, setRecipitentData] = useState([])
    const [selectedRecipitent, setSelectedRecipitent] = useState({})
    const [products, setProducts] = useState([])
    let [notOfProducts, setNoOfProducts] = useState([1])
    const [productData, setProductData] = useState({
        productDescription: "",
        Packaging: "",
        netPrice: "",
        grossPrice: "",
        IVA: ""
    })
    const [productList, setProductList] = useState([

    ])
    const addNewProduct = () => {
        setNoOfProducts([...notOfProducts, 1])
        console.log(notOfProducts);
    }
    const handleProduct = (e) => {
        const singleData = products.find((val) => {
            return val._id == e.target.value;
        })

        setProductData(singleData)
    }
    // const [data, setData] = useState({

    //     docNo: "",
    //     docDate: "",
    //     transportStartTime: "",
    //     goodsTravilingByMeans: "",
    //     sanderAddress: "",
    //     agentInCharge: "",
    //     status: "",
    //     recipientName: "",
    //     productDescription: "",
    //     netPrice: "",
    //     pricePerKg: "",
    //     grossPrice: "",
    //     textPrice: "",
    //     recipientNation: "",
    //     goodDestinationAddress: "",
    //     goodDestinationPostalCode: "",
    //     goodsDestinationCity: "",
    //     goodDestinationProvince: "",
    //     goodDestinationNation: "",
    //     career1: "",
    //     career2: "",
    //     career3: "",
    //     causal: "",
    //     externalAppariance: "",
    //     port: "",
    //     noPackeges: "",
    //     annotations: "",
    // })
    const handleRecipitent = (callsign) => {
        const singleData = recipitentData.find((val) => {
            return val.callsign == callsign;
        })

        setSelectedRecipitent(singleData)
    }
    const update = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/update-document`, { documentData: data }, {
            headers: {
                documentID: documentID,
            }
        }).then((res) => {

        }).catch((err) => { alert(err.response.data.error) })
    }
    const user = JSON.parse(localStorage.getItem("user"))
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "recipientName") {
            handleRecipitent(e.target.value)
        }
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/get-recipitents-data`, {
            headers: {
                id: user._id
            }
        }).then((res) => {
            setRecipitentData(res.data.data)
        }, [])
    })
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/document-data`, {
            headers: {
                documentID: documentID,
            }
        }).then((res) => {
            setData(res.data.data);
        }).catch((err) => { alert(err.response.data.error) })
    }, [])
    return (
        <div>
            <Breadcrumb t="Modifica Documento" in="Documento" link="/dashboard/transports" />
            <div className='content'>
                <div className='container-fluid'>
                    <div>
                        <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">DN° Documento</label>
                                <input style={{ border: "solid gray 1px" }} type="text" onChange={handleChange} name="docNo" value={data.docNo} />
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Data inizio trasporto</label>
                                <input style={{ border: "solid gray 1px" }} type="date" onChange={handleChange} name="docDate" value={data.docDate} />
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Ora inizio trasporto</label>
                                <input style={{ border: "solid gray 1px" }} type="type" onChange={handleChange} name="transportStartTime" value={data.transportStartTime} />
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Beni viaggianti a mezzo:</label>
                                <select style={{ border: "solid gray 1px" }} name="goodsTravilingByMeans" onChange={handleChange}>
                                    <option value={data.goodsTravilingByMeans}>{data.
                                        goodsTravilingByMeans}</option>
                                    <option value="Mittente">Mittente</option>
                                    <option value="Vettore">Vettore</option>
                                    <option value="destinatario">destinatario</option>
                                </select>
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo mitente</label>
                                <select style={{ border: "solid gray 1px" }} name="sanderAddress" onChange={handleChange}>
                                    <option value=""></option>
                                    <option selected value="Sede Legale">Sede Legale</option>
                                </select>
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Agente incaricato</label>
                                <select style={{ border: "solid gray 1px" }} name="agentInCharge" onChange={handleChange}>
                                    <option value="empty"></option>
                                    <option selected value="Non Defento">Non Defento</option>
                                </select>
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Status</label>
                                <select style={{ border: "solid gray 1px" }} name="status" onChange={handleChange}>
                                    <option selected value={data.status}>{data.status}</option>
                                    <option value="done">Done</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>
                        <label className="my-0 py-0">Dati del destinatario</label>
                        <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                            <div className='flex flex-col justify-center w-3/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Denominazione</label>
                                {/* <input recipitentData type="text" name="recipientName" onChange={handleChange} /> */}
                                <select className='w-full' style={{ border: "solid gray 1px" }} name="recipientName" onChange={handleChange}>
                                    <option value={data.recipientName}>{data.recipientName}</option>
                                    {
                                        recipitentData.map((val) => {
                                            return (
                                                <option value={val.callsign} >{val.callsign}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='flex flex-col justify-center w-3/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Selezion altirizzi</label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="recipientaddress" onChange={handleChange} value={data.recipientaddress} />
                            </div>
                            <div className='flex flex-col justify-center w-1/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">CAP</label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="recipientPostalCode" onChange={handleChange} value={data.recipientPostalCode} />
                            </div>
                            <div className='flex flex-col justify-center w-3/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">
                                    Città</label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="recipientCity" onChange={handleChange} value={data.recipientCity} />
                            </div>
                            <div className='flex flex-col justify-center w-1/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Provincia
                                </label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="recipientProvince" onChange={handleChange} value={data.recipientProvince} />
                            </div>
                            <div className='flex flex-col justify-center w-1/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Nazione</label>
                                <select style={{ border: "solid gray 1px" }} name="recipientNation" onChange={handleChange}>
                                    <option value="">--selezionare--</option>
                                    <option selected value="Italia">Italia</option>
                                </select>
                            </div>
                        </div>

                        <label className="my-0 py-0">Luogo di destinazione dei beni</label>
                        <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                            <div className='flex flex-col justify-center w-4/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo ( Scegli un indirizzo tra le sedi del Cliente)</label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="goodDestinationAddress" onChange={handleChange} value={data.goodDestinationAddress} />
                            </div>
                            <div className='flex flex-col justify-center w-3/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">CAP</label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="goodDestinationPostalCode" onChange={handleChange} value={data.goodDestinationPostalCode} />
                            </div>

                            <div className='flex flex-col justify-center w-3/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Città</label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="goodsDestinationCity" onChange={handleChange} value={data.goodsDestinationCity} />
                            </div>
                            <div className='flex flex-col justify-center w-1/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Provincia
                                </label>
                                <input style={{ border: "solid gray 1px" }} type="text" name="goodDestinationProvince" onChange={handleChange} value={data.goodDestinationProvince} />
                            </div>
                            <div className='flex flex-col justify-center w-1/12'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0" >Nazione</label>
                                <select style={{ border: "solid gray 1px" }} name="goodDestinationNation" onChange={handleChange} value={data.goodDestinationNation}>
                                    <option value="">--selezionare--</option>
                                    <option value="Italia">Italia</option>
                                </select>
                            </div>
                        </div>

                        <label className="my-0 py-0">Dettagli prodotti</label>
                        <div className=' border-2 border-gray-600 mb-2 p-1'>
                            {
                                notOfProducts.map((val) => {
                                    return (
                                        <div className='flex gap-2'>
                                            <div className='flex flex-column justify-center w-4/12'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Descrizione</label>
                                                <select style={{ border: "solid gray 1px", width: "100%" }} onChange={handleProduct}>
                                                    <option></option>
                                                    {
                                                        products.map((val) => {
                                                            return (
                                                                <option value={val._id}>{val.productDescription}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Imballo</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder=".." type="text" name="career2" onChange={handleChange} value={productData.Packaging} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Quantità</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career3" onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Peso Kg</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career2" onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Prezzo Netto</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career3" onChange={handleChange} value={productData.netPrice} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Prezzo Lordo</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career2" onChange={handleChange} value={productData.grossPrice} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Imponibile</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career3" onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Subtotale</label>
                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career2" onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">IVA %</label>

                                                <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="text" name="career3" onChange={handleChange} value={productData.grossPrice} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='flex justify-end'>
                                <button className='bg-gray-600 px-2 my-1 text-white font-bold' onClick={addNewProduct}>Save Product</button>
                            </div>
                        </div>

                        <label className="my-0 py-0">Vettori</label>
                        <div className='gap-2 border-2 border-gray-600 mb-2 p-1'>
                            <div className='flex flex-row justify-center w-full my-1'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 1</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career1" onChange={handleChange} value={data.career1} />
                            </div>
                            <div className='flex flex-row justify-center w-full  my-1'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 2</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career2" onChange={handleChange} value={data.career2} />
                            </div>
                            <div className='flex flex-row justify-center w-full  my-1'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 3</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career3" onChange={handleChange} value={data.career3} />
                            </div>
                        </div>


                        <label className="my-0 py-0">OAltri dati</label>
                        <div className='border-2 border-gray-600 mb-2 p-1'>
                            <div className='flex flex-col justify-center w-full'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Causale</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="causal" onChange={handleChange} value={data.causal} />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-row gap-2 w-full'>
                                    <div className='flex flex-col justify-center w-2/5'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Aspetto esteriore dei beni</label>
                                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="externalAppariance" onChange={handleChange} value={data.externalAppariance} />
                                    </div>
                                    <div className='flex flex-col justify-center w-2/5'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Porto</label>
                                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="port" onChange={handleChange} value={data.port} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/5'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">N° colli</label>
                                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" name="noPackeges" onChange={handleChange} value={data.noPackeges} />
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center w-2/2'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Annotazioni</label>
                                    <textarea style={{ border: "solid gray 1px", width: "100%" }} type="text" name="annotations" onChange={handleChange} value={data.annotations} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 flex justify-end'>
                            <button className='bg-gray-600 text-white px-4 py-2 font-bold text-sm' onClick={update}>Aggiorna dati</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditForm