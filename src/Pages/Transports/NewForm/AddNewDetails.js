import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddNew = () => {
    const history = useNavigate()
    const [recipitentData, setRecipitentData] = useState([])
    const [selectedRecipitent, setSelectedRecipitent] = useState({})
    const [data, setData] = useState({

        docNo: "",
        docDate: "",
        transportStartTime: "",
        goodsTravilingByMeans: "",
        sanderAddress: "",
        agentInCharge: "",
        status: "",
        recipientName: "",
        // recipientaddress: "",
        // recipientPostalCode: "",
        // recipientCity: "",
        // recipientProvince: "",
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

    const submit = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/transport`, { documentData: data, recipientData: selectedRecipitent }, {
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
        }, [])
    })
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
                                    {/* <input recipitentData type="text" name="recipientName" onChange={handleChange} /> */}
                                    <select className='w-full' style={{ border: "solid gray 1px" }} name="recipientName" onChange={handleChange}>
                                        <option></option>
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
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Provincia
                                    </label>
                                    <input style={{ border: "solid gray 1px" }} type="text" name="recipientProvince" onChange={handleChange} value={selectedRecipitent.province} />
                                </div>
                                <div className='flex flex-col justify-center w-1/12'>
                                    <label style={{ fontWeight: "500", fontSize: "12px" }} className="my-0 py-0">Nazione</label>
                                    <select style={{ border: "solid gray 1px" }} name="recipientNation" onChange={handleChange}>
                                        <option value="">--selezionare--</option>
                                        <option value="0">-- Select Country --</option>
                                        <option selected="" value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua">Antigua</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijani">Azerbaijani</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Netherlands">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia-Hercegovina">Bosnia-Hercegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British IOT">British IOT</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Rep">Central African Rep</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Islands">Cocos Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Faeroe Islands">Faeroe Islands</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern">French Southern</option>
                                        <option value="French Southern Ter">French Southern Ter</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard">Heard</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Ivory Coast">Ivory Coast</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="MNP">MNP</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="NER">NER</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Neutral Zone">Neutral Zone</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="North Korea">North Korea</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre">Saint Pierre</option>
                                        <option value="Saint Vincent">Saint Vincent</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Scotland">Scotland</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovak Republic">Slovak Republic</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somali Democratic">Somali Democratic</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia">South Georgia</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                                        <option value="STP">STP</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="TCA">TCA</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Toga">Toga</option>
                                        <option value="Togolese">Togolese</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tongo">Tongo</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab">United Arab</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Upper Volta">Upper Volta</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="USSR(Former)">USSR(Former)</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="VI, British">VI, British</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Virgin Islands, USA">Virgin Islands, USA</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="WLF">WLF</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Yugoslavia">Yugoslavia</option>
                                        <option value="Zaire">Zaire</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
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
                                        <option value="0">-- Select Country --</option>
                                        <option selected="" value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua">Antigua</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijani">Azerbaijani</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Netherlands">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia-Hercegovina">Bosnia-Hercegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British IOT">British IOT</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Rep">Central African Rep</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Islands">Cocos Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Faeroe Islands">Faeroe Islands</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern">French Southern</option>
                                        <option value="French Southern Ter">French Southern Ter</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard">Heard</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Ivory Coast">Ivory Coast</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="MNP">MNP</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="NER">NER</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Neutral Zone">Neutral Zone</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="North Korea">North Korea</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre">Saint Pierre</option>
                                        <option value="Saint Vincent">Saint Vincent</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Scotland">Scotland</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovak Republic">Slovak Republic</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somali Democratic">Somali Democratic</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia">South Georgia</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                                        <option value="STP">STP</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="TCA">TCA</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Toga">Toga</option>
                                        <option value="Togolese">Togolese</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tongo">Tongo</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab">United Arab</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Upper Volta">Upper Volta</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="USSR(Former)">USSR(Former)</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="VI, British">VI, British</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Virgin Islands, USA">Virgin Islands, USA</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="WLF">WLF</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Yugoslavia">Yugoslavia</option>
                                        <option value="Zaire">Zaire</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
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