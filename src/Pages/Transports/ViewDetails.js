import React, { useState, useEffect, useRef } from 'react'
import Pdf from "react-to-pdf";
import Breadcrumb from '../../components/Breadcrumb'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ViewDetails = () => {
    const { documentID } = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/display-transport-view`, {
            headers: {
                id: documentID
            }
        }).then((res) => {
            setData(res.data.data)
        }, [])
    })
    const ref = useRef()
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [8.3, 11.7]
    };
    return (
        <div>
            <Breadcrumb t="transporter Details" />
            <div className='content' style={{ width: "8.3in", margin: "auto", marginTop: "20px" }} ref={ref}>
                <div className='bg-gray-600'>
                    <Pdf targetRef={ref} filename="example.pdf" options={options} style={{ width: "8.3in", margin: "auto", }} >
                        {({ toPdf }) => <button onClick={toPdf} className="bg-gray-600 px-2 py-1 rounded-sm text-white font-bold">Download Pdf <i className='ion-android-download text-lg text-white mx-2'></i></button>}
                    </Pdf>
                </div>
                <div className=' py-0 my-0'>
                    <div className="border-2 border-gray-600 w-full">
                        <div className="grid grid-cols-3 border-b border-black">
                            <div className="bg-gray-300 text-center py-3 col-span-2 text-2xl font-bold border-r border-black">
                                Transport Document
                            </div>
                            <div className="text-center">Page 1 of 1</div>
                        </div>
                        <div className="grid grid-cols-3 border-b border-black border-black text-center text-sm">
                            <div className="border-r p-1 border-black">
                                Transport doc number <br />
                                <span>
                                    {
                                        data.docNo
                                    }
                                </span>
                            </div>
                            <div className="border-r p-1 border-black">
                                Date of loading <br />
                                18/06/2014
                            </div>
                            <div className="p-1">
                                Date of receipt <br />
                                18/06/2014
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-b border-black text-center text-sm">
                            <div className="border-r p-1 border-black">
                                Consignee
                                <div className="text-start">
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                </div>
                            </div>
                            <div className="p-1">
                                Consignee
                                <div className="text-start">
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-b border-black text-center text-sm">
                            <div className="border-r p-1 border-black">
                                Consignee
                                <div className="text-start">
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                </div>
                            </div>
                            <div className="p-1">
                                Consignee
                                <div className="text-start">
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                    <p>Massive Dynamics</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 border-b border-black border-black text-center text-sm">
                            <div className="border-r p-1 border-black">
                                Invoice number <br />
                                6
                            </div>
                            <div className="border-r p-1 border-black">
                                Vehicle registration <br />
                                W238 WK
                            </div>
                            <div className="p-1">
                                Trailer registration <br />
                                I659 EP
                            </div>
                        </div>
                        <div className="grid grid-cols-5 border-b border-black border-black text-center text-xs">
                            <div className="col-span-4 border-r p-1 border-black">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In accusamus
                                veniam aliquam facere magnam doloremque placeat, labore
                            </div>
                            <div className="p-1">Driver'signature</div>
                        </div>
                        <table className="w-full text-sm border-b border-black">
                            <thead className="border-b border-dotted border-black bg-gray-200">
                                <tr>
                                    <th className="border-r border-dotted border-black">load</th>
                                    <th className="border-r border-dotted border-black">
                                        Number and type of packages
                                    </th>
                                    <th className="border-r py-3 px-2 border-dotted border-black">
                                        Cat. trans.
                                    </th>
                                    <th className="px-2">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-dotted border-black text-center">
                                    <td className="p-1 text-start max-w-lx border-r border-dotted border-black">
                                        <p>Diesel</p>
                                        <p>
                                            UN 1202, DIESEL FUEL FSDFSDFSDFSDFDSFDSFDSFDSF, SDSAD, DSADASD,
                                        </p>
                                    </td>
                                    <td className="border-r border-dotted border-black">10 Drum</td>
                                    <td className="border-r border-dotted border-black">3</td>
                                    <td>Net: 300L</td>
                                </tr>
                                <tr className="border-b border-dotted border-black text-center">
                                    <td className="p-1 text-start max-w-lx border-r border-dotted border-black">
                                        <p>Diesel</p>
                                        <p>
                                            UN 1202, DIESEL FUEL FSDFSDFSDFSDFDSFDSFDSFDSF, SDSAD, DSADASD,
                                        </p>
                                    </td>
                                    <td className="border-r border-dotted border-black">10 Drum</td>
                                    <td className="border-r border-dotted border-black">3</td>
                                    <td>Net: 300L</td>
                                </tr>
                                <tr className="border-dotted border-black text-center">
                                    <td className="p-1 text-start max-w-lx border-r border-dotted border-black">
                                        <p>Diesel</p>
                                        <p>
                                            UN 1202, DIESEL FUEL FSDFSDFSDFSDFDSFDSFDSFDSF, SDSAD, DSADASD,
                                        </p>
                                    </td>
                                    <td className="border-r border-dotted border-black">10 Drum</td>
                                    <td className="border-r border-dotted border-black">3</td>
                                    <td>Net: 300L</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-sm p-1">
                            <p className="text-center">Shipping remarks</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dsadsads,
                                <br />
                                Lorem ipsum, dolor sit amet
                            </p>
                        </div>
                        <div className="text-sm pb-9 text-center border-b border-t border-black">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda et
                            asperiores nemo dolore deleniti sequi repellendus cumque officia soluta,
                            vitae dicta consequatur porro qui nostrum in quibusdam, consectetur nisi
                            id.
                        </div>
                        <div className="grid grid-cols-5 text-center text-sm">
                            <div className="border-r col-span-3 border-black">
                                <div className="pb-9 border-black border-b">Company</div>
                                <div className="pb-9">Name and status of receiver</div>
                            </div>
                            <div>Receiver's signature</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewDetails