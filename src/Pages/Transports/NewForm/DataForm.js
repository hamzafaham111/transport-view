import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';

const DataForm = () => {
    const history = useNavigate()
    const [filtered, setFiltered] = useState([])
    const [recipitentData, setRecipitentData] = useState([])
    const [selectedRecipitent, setSelectedRecipitent] = useState({})
    const [products, setProducts] = useState([])
    let [notOfProducts, setNoOfProducts] = useState([])
    const [list, setList] = useState("none")
    const [finalProducts, setFinalProducts] = useState([])
    const [productData, setProductData] = useState({
        productDescription: "",
        productQuantity: "",
        priceKG: "",
        Packaging: "",
        netPrice: "",
        grossPrice: "",
        texPrice: "",
        subTotal: "",
        IVA: ""
    })

    const addProduct = () => {
        setFinalProducts([...finalProducts, productData])
        setProductData({
            productDescription: "",
            productQuantity: "",
            priceKG: "",
            Packaging: "",
            netPrice: "",
            grossPrice: "",
            texPrice: "",
            subTotal: "",
            IVA: ""
        })
    }
    const handleProduct = async (e) => {
        const { name, value } = e.target;
        setProductData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
        if (value == "") {
            setList("none")
        } else {
            if (name == "productDescription") {
                setList("block")
                const result = products.filter((val) => {
                    return val.productDescription.match(e.target.value);
                })
                setFiltered(result)
            }
        }
    }
    const clickedProduct = (id) => {
        const singleData = products.find((val) => {
            return val._id == id
        })
        setProductData(singleData)
    }

    const [data, setData] = useState({

        docNo: "",
        docDate: "",
        transportStartTime: "",
        goodsTravilingByMeans: "",
        sanderAddress: "",
        agentInCharge: "",
        status: "",
        recipientName: "",
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

    const handleRecipitent = (callsign) => {
        const singleData = recipitentData.find((val) => {
            return val.callsign == callsign;
        })

        setSelectedRecipitent(singleData)
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

    const submit = async (e) => {
        e.preventDefault();
        let emptyElements = [];
        for (let key of Object.keys(data)) {
            if (!data[key]) {
                emptyElements.push(key);
            }
        }
        emptyElements.map((val) => {
            return document.getElementById(val).style = "border:solid red 2px"
        })
        await axios.post(`${process.env.REACT_APP_DOMAIN}/add-document`, { documentData: data, recipientData: selectedRecipitent, finalProducts, lastProducts: productData }, {
            headers: {
                ID: user._id
            }
        }).then((res) => {
            alert(res.data.message)
            history('/dashboard/transports')
        }).catch((err) => { alert(err.response.data.error) })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/get-recipitents-data`, {
            headers: {
                id: user._id
            }
        }).then((res) => {
            setRecipitentData(res.data.data)
        })
        axios.get(`${process.env.REACT_APP_DOMAIN}/get-products-data`).then((res) => {
            setProducts(res.data.data)
            setFiltered(res.data.data)
        })

    }, [])
    return (
        <>
            <form onClick={(e) => { setList("none") }} >
                <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">DN° Documento</label>
                        <input style={{ border: "solid gray 1px" }} type="number" id="docNo" required onChange={handleChange} name="docNo" />
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Data inizio trasporto</label>
                        <input style={{ border: "solid gray 1px" }} type="date" id="docDate" required onChange={handleChange} name="docDate" />
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Ora inizio trasporto</label>
                        <input style={{ border: "solid gray 1px" }} type="time" id="transportStartTime" required onChange={handleChange} name="transportStartTime" />
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Beni viaggianti a mezzo:</label>
                        {/* <input style={{ border: "solid gray 1px" }} type="time" onChange={handleChange} name="goodsTravilingByMeans" /> */}
                        <select style={{ border: "solid gray 1px" }} required id="goodsTravilingByMeans" name="goodsTravilingByMeans" onChange={handleChange}>
                            <option></option>
                            <option value="Mittente">Mittente</option>
                            <option value="Vettore">Vettore</option>
                            <option value="destinatario">Destinatario</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo mitente</label>
                        <select style={{ border: "solid gray 1px" }} required id="sanderAddress" name="sanderAddress" onChange={handleChange}>
                            <option></option>
                            <option value="Sede Legale">Sede Legale</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Agente incaricato</label>
                        <select style={{ border: "solid gray 1px" }} required id="agentInCharge" name="agentInCharge" onChange={handleChange}>
                            <option></option>
                            <option value="Non Defento">Non Definito</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Status</label>
                        <select style={{ border: "solid gray 1px" }} required id="status" name="status" onChange={handleChange}>
                            <option>--selezionare--</option>
                            <option value="done">Completato</option>
                            <option value="pending">In Attesa</option>
                        </select>
                    </div>
                </div>
                <label className="my-0 py-0">Dati del destinatario</label>
                <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                    <div className='flex flex-col justify-center w-3/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Denominazione</label>
                        <select className='w-full' style={{ border: "solid gray 1px" }} required id="recipientName" name="recipientName" onChange={handleChange}>
                            <option>Seleziona Denominazione</option>
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
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo</label>
                        <input style={{ border: "solid gray 1px" }} type="text" name="recipientaddress" onChange={handleChange} value={selectedRecipitent.address} />
                    </div>
                    <div className='flex flex-col justify-center w-1/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">CAP</label>
                        <input style={{ border: "solid gray 1px" }} type="text" name="recipientPostalCode" onChange={handleChange} value={selectedRecipitent.postalcode} />
                    </div>
                    <div className='flex flex-col justify-center w-3/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">
                            Città</label>
                        <input style={{ border: "solid gray 1px" }} type="text" name="recipientCity" onChange={handleChange} value={selectedRecipitent.city} />
                    </div>
                    <div className='flex flex-col justify-center w-1/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} required className="my-0 py-0">Provincia
                        </label>
                        <input style={{ border: "solid gray 1px" }} type="text" id="recipientProvince" name="recipientProvince" onChange={handleChange} />
                    </div>
                    <div className='flex flex-col justify-center w-1/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Nazione</label>
                        <select style={{ border: "solid gray 1px" }} name="recipientNation" id="recipientNation" onChange={handleChange}>
                            <option>--selezionare--</option>
                            <option value="Italia">Italia</option>
                        </select>
                    </div>
                </div>

                <label className="my-0 py-0">Luogo di destinazione dei beni</label>
                <div className='flex flex-row gap-2 border-2 border-gray-600 mb-2 p-1'>

                    <div className='flex flex-col justify-center w-4/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Indirizzo ( Scegli un indirizzo tra le sedi del Cliente)</label>
                        <input style={{ border: "solid gray 1px" }} type="text" required id="goodDestinationAddress" name="goodDestinationAddress" onChange={handleChange} />
                    </div>
                    <div className='flex flex-col justify-center w-3/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">CAP</label>
                        <input style={{ border: "solid gray 1px" }} type="text" required id="goodDestinationPostalCode" name="goodDestinationPostalCode" onChange={handleChange} />
                    </div>

                    <div className='flex flex-col justify-center w-3/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Città</label>
                        <input style={{ border: "solid gray 1px" }} type="text" required id="goodsDestinationCity" name="goodsDestinationCity" onChange={handleChange} />
                    </div>
                    <div className='flex flex-col justify-center w-1/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Provincia
                        </label>
                        <input style={{ border: "solid gray 1px" }} type="text" required id="goodDestinationProvince" name="goodDestinationProvince" onChange={handleChange} />
                    </div>
                    <div className='flex flex-col justify-center w-1/12'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0" >Nazione</label>
                        <select style={{ border: "solid gray 1px" }} required id="goodDestinationNation" name="goodDestinationNation" onChange={handleChange} >
                            <option>--selezionare--</option>
                            <option value="Italia">Italia</option>
                        </select>
                    </div>
                </div>

                <label className="my-0 py-0">Dettaglio Prodotto</label>
                <div className=' border-2 border-gray-600 mb-2 p-1' onClick={(e) => { setList("none") }} >
                    {
                        finalProducts.map((val) => {
                            return (
                                <div className='flex gap-2'>
                                    <div className='flex flex-column justify-center w-3/12'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Descrizione</label>
                                        <input type="text" style={{ border: "solid gray 1px", width: "100%" }} name="productDescription" placeholder="--Seleziona Descrizione--" onChange={handleProduct} value={val.productDescription} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Unita di Misura</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder=".." type="text" name="Packaging" onChange={handleProduct} value={val.Packaging} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Quantità</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="productQuantity" onChange={handleProduct} value={val.productQuantity} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Peso Kg</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="priceKG" onChange={handleProduct} value={val.priceKG} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Prezzo Netto</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="netPrice" onChange={handleProduct} value={val.netPrice} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Prezzo Lordo</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="grossPrice" onChange={handleProduct} value={val.grossPrice} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Imponibile</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="netPrice" onChange={handleProduct} value={val.netPrice} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Subtotale</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="subTotal" onChange={handleProduct} value={val.subTotal} />
                                    </div>
                                    <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0" onChange={handleProduct} >IVA %</label>
                                        <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name=" IVA" onChange={handleChange} value={val.IVA} />
                                    </div>
                                    {/* <div className='w-1/12 flex justify-center mb-1 items-end'>
                                        <span><i className='ion-close-circled text-lg'></i></span>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                    <div className='flex gap-2'>
                        <div className='flex flex-column justify-center w-3/12'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Descrizione</label>
                            <input type="text" style={{ border: "solid gray 1px", width: "100%" }} name="productDescription" id="productDescription" placeholder="--Seleziona Descrizione--" onChange={handleProduct} value={productData.productDescription} />
                            <div style={{ display: list }}>
                                <ul style={{ position: "absolute", display: "flex", dispay: "flex", flexDirection: "column", background: "white", width: "200px", borderRadius: "10px", minheight: "300px", overflow: "auto", marginTop: "5px" }} onClick={(e) => { setList("none") }}>
                                    {
                                        filtered.map((val) => {
                                            return (
                                                <li className='hover:bg-blue-500 hover:text-white cursor-pointer p-1 bg-gray-300' onClick={() => { clickedProduct(val._id) }}>{val.productDescription}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                        <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Unita di Misura</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder=".." type="text" name="Packaging" onChange={handleProduct} value={productData.Packaging} onClick={(e) => { setList("none") }} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Quantità</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="productQuantity" onChange={handleProduct} onClick={(e) => { setList("none") }} value={productData.productQuantity} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Peso Kg</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="priceKG" onChange={handleProduct} value={productData.priceKG} onClick={(e) => { setList("none") }} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Prezzo Netto</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="netPrice" onChange={handleProduct} value={productData.netPrice} onClick={(e) => { setList("none") }} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Prezzo Lordo</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="grossPrice" onChange={handleProduct} value={productData.grossPrice} onClick={(e) => { setList("none") }} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Imponibile</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="texPrice" onChange={handleProduct} value={productData.texPrice} onClick={(e) => { setList("none") }} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12  my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Subtotale</label>
                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="subTotal" onChange={handleProduct} value={productData.subTotal} onClick={(e) => { setList("none") }} />
                        </div>
                        <div className='flex flex-col justify-center w-1/12 my-1 text-center'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0" onChange={handleProduct} >IVA %</label>

                            <input style={{ border: "solid gray 1px", width: "100%", textAlign: "center" }} placeholder="00" type="number" name="IVA" onChange={handleProduct} value={productData.IVA} onClick={(e) => { setList("none") }} />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <snap className='bg-gray-600 px-2 my-1 text-white font-bold cursor-pointer' onClick={addProduct}>Aggiungi nuovo prodotto</snap>
                    </div>
                </div>

                <label className="my-0 py-0">Vettori</label>
                <div className='gap-2 border-2 border-gray-600 mb-2 p-1'>
                    <div className='flex flex-row justify-center w-full my-1'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 1</label>
                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" id="career1" name="career1" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row justify-center w-full  my-1'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 2</label>
                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" id="career2" name="career2" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row justify-center w-full  my-1'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="w-1/6 my-0 py-0">Vettore 3</label>
                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" className="w-5/6" name="career3" onChange={handleChange} />
                    </div>
                </div>

                <label className="my-0 py-0">Altri dati</label>
                <div className='border-2 border-gray-600 mb-2 p-1'>
                    <div className='flex flex-col justify-center w-full'>
                        <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Causale</label>
                        <input style={{ border: "solid gray 1px", width: "100%" }} type="text" id="causal" name="causal" onChange={handleChange} />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='flex flex-row gap-2 w-full'>
                            <div className='flex flex-col justify-center w-2/5'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Aspetto esteriore dei beni</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="text" id="externalAppariance" name="externalAppariance" onChange={handleChange} />
                            </div>
                            <div className='flex flex-col justify-center w-2/5'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Porto</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="text" id="port" name="port" onChange={handleChange} />
                            </div>
                            <div className='flex flex-col justify-center w-1/5'>
                                <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">N° colli</label>
                                <input style={{ border: "solid gray 1px", width: "100%" }} type="number" id="noPackeges" name="noPackeges" onChange={handleChange} />
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-2/2'>
                            <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Annotazioni</label>
                            <textarea style={{ border: "solid gray 1px", width: "100%" }} type="text" name="annotations" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className='mt-2 flex justify-end'>
                    <input type="submit" className='bg-gray-600 text-white px-4 py-2 font-bold text-sm' value="Salva dati" onClick={submit} />
                </div>
            </form>
        </>
    )
}

export default DataForm