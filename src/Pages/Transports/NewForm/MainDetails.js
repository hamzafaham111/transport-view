import React from 'react'
import DataTable from 'react-data-table-component'
const MainDetails = () => {
    const col = [
        {
            name: <snap snap style={{ fontWeight: "bold" }}> Descrizione</snap >,
            selector: (row) => <select style={{ border: "solid gray 1px", width: "100%" }}>
                <option>-- Select Product --</option>
                <option>2</option>
                <option>3</option>
            </select>
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
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}>Prezzo Netto</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
        },
        {
            name: <snap snap style={{ fontWeight: "bold" }}> Prezzo Lordo</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
        },
        {
            name: <snap style={{ fontWeight: "bold" }}> Imponibile</snap>,
            selector: (row) => <input type="text" style={{ border: "solid gray 1px", width: "100%", textAlign: "center", padding: "3px" }} />
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
            Quantity: "",
            PriceKG: "",
            netPrice: "",
            grossPrice: "",
            taxableIncome: "",
            subTotal: "",
            VAT: ""
        }
    ]
    return (
        <div className="border-2 border-gray-600 mb-2 p-1">
            <DataTable columns={col} data={data} />
        </div>
    )
}

export default MainDetails