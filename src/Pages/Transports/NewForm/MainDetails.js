import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
const MainDetails = () => {
    const [products, setProducts] = useState([])
    const [singleproducts, setSingleProducts] = useState({

    })
    const handleProducts = (e) => {
        console.log(e.target.value)
        const singleProduct = products.find((val) => {
            return val._id == e.target.value;
        })
        setSingleProducts(singleProduct)
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/get-products-data`).then((res) => {
            setProducts(res.data.data)
        }, [])
    }, [])
    const col = [
        {
            name: <snap snap style={{ fontWeight: "bold" }}> Descrizione</snap >,
            selector: (row) => (
                <select style={{ border: "solid gray 1px", width: "100%" }} onChange={handleProducts}>
                    <option>--Select Product--</option>
                    {
                        products.map((val) => {
                            return (
                                <option value={val._id}>{val.productDescription}</option>
                            )
                        })
                    }
                </select>
            )
        },
        {
            name: <snap style={{ fontWeight: "bold" }}>Imballo</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} value="1 x []" />
        },
        {
            name: <snap snap style={{ fontWeight: "bold" }}> Quantità</snap >,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}>Peso Kg</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} value={singleproducts.pricePerKg} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}>Prezzo Netto</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} value={singleproducts.grossPrice} />
        },
        {
            name: <snap snap style={{ fontWeight: "bold" }}> Prezzo Lordo</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} value={singleproducts.textPrice} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}> Imponibile</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} value={singleproducts.pricePerKg} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}>Subtotale</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}>IVA%</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
        },
    ]
    const data = [
        {
            Description: "",
            Packaging: "",
            PriceKG: "",
            netPrice: "",
            grossPrice: "",
            taxableIncome: "",
            subTotal: "",
        }
    ]
    return (
        <div className="border-2 border-gray-600 mb-2 p-1">
            <DataTable columns={col} data={data} />
        </div>
    )
}

export default MainDetails