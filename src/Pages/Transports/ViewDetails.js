import React, { useState, useEffect, useRef } from 'react'
import Pdf from "react-to-pdf";
import Breadcrumb from '../../components/Breadcrumb'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const ViewDetails = () => {
    const { documentID } = useParams();
    const [data, setData] = useState({})
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/display-transport-view`, {
            headers: {
                id: documentID
            }
        }).then((res) => {
            setData(res.data.data)
            setProducts(res.data.data.products)
        })
    }, [])
    const ref = useRef()
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [8.27, 11.7]
    };
    return (
        <div>
            <Breadcrumb t="transporter Details" />
            <div className='bg-gray-600 mb-5'>
                <Pdf targetRef={ref} filename="example.pdf" options={options} >
                    {({ toPdf }) => <button onClick={toPdf} className="bg-gray-600 px-2 py-1 rounded-sm text-white font-bold">Download Pdf <i className='ion-android-download text-lg text-white mx-2'></i></button>}
                </Pdf>
            </div>
            <div className='content '>
                <div ref={ref} style={{ width: "8.27in", height: "11.69in", margin: "auto", background: "white", }}>
                    <div>
                        <div className='bg-blue-500 py-3 text-center'>
                            <snap className="text-orange-200 text-5xl font-bold">OIL SISTEMS</snap>
                        </div>
                        <div className='border-b-2 border-blue-900 flex flex-row items-center justify-between mb-3 px-2'>
                            <snap className='text-sm font-bold text-blue-900'>COSTRUZIONE E MANUTENZIONE</snap>
                            {/* <FiberManualRecordIcon className='text-xs text-yellow-300' /> */}
                            <div className='' style={{ height: "8px", width: "8px", background: "yellow", borderRadius: "50px" }}></div>
                            <snap className='text-sm font-bold text-blue-900'>IMPIANTI E DEPOSITI CARBURANTI</snap>
                            {/* <FiberManualRecordIcon className='text-xs text-yellow-300' /> */}
                            <div className='' style={{ height: "8px", width: "8px", background: "yellow", borderRadius: "50px" }}></div>

                            <snap className='text-sm font-bold text-blue-900'>GASOLIO</snap>
                            <div className='' style={{ height: "8px", width: "8px", background: "yellow", borderRadius: "50px" }}></div>

                            {/* <FiberManualRecordIcon className='text-xs text-yellow-300' /> */}
                            <snap className='text-sm font-bold text-blue-900'>BENZINA</snap>
                            <div className='' style={{ height: "8px", width: "8px", background: "yellow", borderRadius: "50px" }}></div>

                            {/* <FiberManualRecordIcon className='text-xs text-yellow-300' /> */}
                            <snap className='text-sm font-bold text-blue-900'>GPL</snap>
                            <div className='' style={{ height: "8px", width: "8px", background: "yellow", borderRadius: "50px" }}></div>

                            {/* <FiberManualRecordIcon className='text-xs text-yellow-300' /> */}
                            <snap className='text-sm font-bold text-blue-900'>METANO</snap>
                        </div>
                    </div>
                    <div className='px-4 pb-2' >
                        <div className='flex flex-col items-end '>
                            <div className='flex flex-col items-start '>
                                <div className='flex flex-col '>
                                    <span className='text-md font-extrabold'>DOCUMENTO DI TRASPORTO (D.d.t.)</span>
                                    <span className='text-xs'>D.P.R. 472 del 14.08.1996 – D.P.R. 696 del 21.12.1996</span>
                                </div>
                                <span className=' py-2'>N.{data.docNo} del {data.docDate}</span>
                                <span className=''>A mezzo [X]cedente  [  ]cessionario [  ]{data.goodsTravilingByMeans}</span>
                            </div>
                        </div>
                        <div className='my-1' style={{ borderBottom: "solid black 1px" }}></div>
                        <div className='grid grid-cols-2 mb-4'>
                            <div className='flex flex-col leading-4 text-sm'>
                                <span className='font-bold my-2'>CESSIONARIO:</span>
                                <span className='text-sm leading-5'>COMMERCIALE MELANDRO S.R.L.</span>
                                <span className='text-sm leading-5'>C/DA MADONNA DELLE GRAZIE</span>
                                <span className='text-sm leading-5'>SATRIANO DI LUCANIA  PZ</span>
                            </div>
                            <div className='flex flex-col leading-4 text-sm items-center '>
                                <span className='font-bold my-2'>{data.goodDestinationAddress}</span>
                                <snap className="my-auto">IDEM</snap>
                            </div>
                        </div>
                        <snap className="font-bold text-sm">CAUSALE: {data.causal}</snap>
                        <div className='border-b-2 border-gray-800'></div>
                        <table style={{ width: "100%" }}>
                            <tr className=''>
                                <th>QUANTITA</th>
                                <th>UM</th>
                                <th>DESCRIZIONE DEI BENI (natura e qualità)</th>
                            </tr>
                            {
                                products.map((val) => {
                                    return (
                                        <tr className="text-sm">
                                            <td>{val.productQuantity}</td>
                                            <td>{val.Packaging}</td>
                                            <td>{val.productDescription}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <div className='flex justify-between my-2 font-bold'>
                            <span className='text-xs'>{data.externalAppariance}</span>
                            <span className='text-xs'>numero colli {data.noPackeges}	</span>
                            <span className='text-xs'>PESO KG</span>
                        </div>
                        <div className='flex justify-between my-2 font-bold'>
                            <span className='text-xs'>Consegna o inizio trasporto </span>
                            <span className='text-xs'>A mezzo: CEDENTE  ORA: {data.transportStartTime}  DATA: {data.docDate}</span>
                            <span className='text-xs'>PORTO {data.port}</span>
                        </div>
                        <span className='my-4 font-bold'>VETTORE: </span>
                        <div className='flex justify-between my-2 font-bold'>
                            <span className='text-xs pb-8 border-b-2 border-black'>{data.career1}</span>
                            <span className='text-xs pb-8 border-b-2 border-black'>{data.career2}</span>
                            <span className='text-xs pb-8 border-b-2 border-black'>{data.career3}</span>
                        </div>
                    </div>
                    <div className='mt-40 absolute bottom-0'>
                        <div className='flex flex-row'>
                            <div className='text-gray-500'>_______________________________</div>
                            <span className=' text-gray-500'><span className='font-bold'>OIL SISTEMS S.A.S.</span> di Quintalunce Michele & C.div</span>
                            <div className='text-gray-500 flex flex-col items-center'>
                                <span>_______________________________</span>
                                <span className='text-gray-500'>P.Iva:04957901210</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-gray-500 py-8 justify-center items-center font-bold'>
                            <span>Via Antonio Gramsci, 11 - 80040 Volla (NA) - Tell: 081. 836.95.00</span>
                            <span>web: www.oilsistems.it - mail: info@oilsistems.it - pec: oilsistemssas@pec.it</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ViewDetails
