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
                        <select style={{ border: "solid gray 1px" }} className="leading-1 mt-0 px-1 text-gray" name="state" onChange={handleChange}>
                            <option value="">--selezionare--</option>
                            <option value="Italia">Italia</option>
                        </select>
                    </diiv>
                    <diiv className="flex flex-col w-2/6">
                        <label className=' my-0 text-gray-600' style={{ fontWeight: "500" }}>Provincia</label>
                        <select type="text" name="province" onChange={handleChange} className="leading-1 mt-0 px-1 text-gray" style={{ border: "solid gray 1px" }} value={data.province}>
                            <option value="left">--selezionare Provincia--</option>
                            <option value="Agrigento">Agrigento</option>
                            <option value="Alessandria">Alessandria</option>
                            <option value="Ancona">Ancona</option>
                            <option value="Aosta">Aosta</option>
                            <option value="Arezzo">Arezzo</option>
                            <option value="Ascoli Piceno">Ascoli Piceno</option>
                            <option value="Asti">Asti</option>
                            <option value="Avellino">Avellino</option>
                            <option value="Bari">Bari</option>
                            <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
                            <option value="Belluno">Belluno</option>
                            <option value="Benevento">Benevento</option>
                            <option value="Bergamo">Bergamo</option>
                            <option value="Biella">Biella</option>
                            <option value="Bologna">Bologna</option>
                            <option value="Bolzano">Bolzano</option>
                            <option value="Brescia">Brescia</option>
                            <option value="Brindisi">Brindisi</option>
                            <option value="Cagliari">Cagliari</option>
                            <option value="Caltanissetta">Caltanissetta</option>
                            <option value="Campobasso">Campobasso</option>
                            <option value="Caserta">Caserta</option>
                            <option value="Catania">Catania</option>
                            <option value="Catanzaro">Catanzaro</option>
                            <option value="Chieti">Chieti</option>
                            <option value="Como">Como</option>
                            <option value="Cosenza">Cosenza</option>
                            <option value="Cremona">Cremona</option>
                            <option value="Crotone">Crotone</option>
                            <option value="Cuneo">Cuneo</option>
                            <option value="Enna">Enna</option>
                            <option value="Fermo">Fermo</option>
                            <option value="Ferrara">Ferrara</option>
                            <option value="Firenze">Firenze</option>
                            <option value="Foggia">Foggia</option>
                            <option value="Forl&igrave;-Cesena">Forl&igrave;-Cesena</option>
                            <option value="Frosinone">Frosinone</option>
                            <option value="Genova">Genova</option>
                            <option value="Gorizia">Gorizia</option>
                            <option value="Grosseto">Grosseto</option>
                            <option value="Imperia">Imperia</option>
                            <option value="Isernia">Isernia</option>
                            <option value="L'aquila">L'aquila</option>
                            <option value="La spezia">La spezia</option>
                            <option value="Latina">Latina</option>
                            <option value="Lecce">Lecce</option>
                            <option value="Lecco">Lecco</option>
                            <option value="Livorno">Livorno</option>
                            <option value="Lodi">Lodi</option>
                            <option value="Lucca">Lucca</option>
                            <option value="Macerata">Macerata</option>
                            <option value="Mantova">Mantova</option>
                            <option value="Massa-Carrara">Massa-Carrara</option>
                            <option value="Matera">Matera</option>
                            <option value="Messina">Messina</option>
                            <option value="Milano">Milano</option>
                            <option value="Modena">Modena</option>
                            <option value="Monza e Brianza">Monza e Brianza</option>
                            <option value="Napoli">Napoli</option>
                            <option value="Novara">Novara</option>
                            <option value="Nuoro">Nuoro</option>
                            <option value="Oristano">Oristano</option>
                            <option value="Padova">Padova</option>
                            <option value="Palermo">Palermo</option>
                            <option value="Parma">Parma</option>
                            <option value="Pavia">Pavia</option>
                            <option value="Perugia">Perugia</option>
                            <option value="Pesaro e Urbino">Pesaro e Urbino</option>
                            <option value="Pescara">Pescara</option>
                            <option value="Piacenza">Piacenza</option>
                            <option value="Pisa">Pisa</option>
                            <option value="Pistoia">Pistoia</option>
                            <option value="Pordenone">Pordenone</option>
                            <option value="PZ">Potenza</option>
                            <option value="PO">Prato</option>
                            <option value="RG">Ragusa</option>
                            <option value="RA">Ravenna</option>
                            <option value="RC">Reggio Calabria</option>
                            <option value="RE">Reggio Emilia</option>
                            <option value="RI">Rieti</option>
                            <option value="RN">Rimini</option>
                            <option value="RM">Roma</option>
                            <option value="RO">Rovigo</option>
                            <option value="SA">Salerno</option>
                            <option value="SS">Sassari</option>
                            <option value="SV">Savona</option>
                            <option value="SI">Siena</option>
                            <option value="SR">Siracusa</option>
                            <option value="SO">Sondrio</option>
                            <option value="SU">Sud Sardegna</option>
                            <option value="TA">Taranto</option>
                            <option value="TE">Teramo</option>
                            <option value="TR">Terni</option>
                            <option value="TO">Torino</option>
                            <option value="TP">Trapani</option>
                            <option value="TN">Trento</option>
                            <option value="TV">Treviso</option>
                            <option value="TS">Trieste</option>
                            <option value="UD">Udine</option>
                            <option value="VA">Varese</option>
                            <option value="VE">Venezia</option>
                            <option value="VB">Verbano-Cusio-Ossola</option>
                            <option value="VC">Vercelli</option>
                            <option value="VR">Verona</option>
                            <option value="VV">Vibo valentia</option>
                            <option value="VI">Vicenza</option>
                            <option value="VT">Viterbo</option>
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