import React, { useState, useContext } from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const Login = (Props) => {
    const [progress, setProgress] = useState(false)
    const [status, setStatus] = useState('');
    const [errorShadow, setErrorShadow] = useState()
    const history = useNavigate()
    const progressFunction = (val) => {
        setProgress(val);
    }
    const [data, setData] = useState({
        enterEmail: "",
        enterPassword: ""
    })
    const dashbord = (val) => {
        const user = JSON.stringify(val)
        localStorage.setItem("user", user)
        history('/dashboard')
    }
    const login = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/login`, data).then((res) => {

            dashbord(res.data.data)
        }).catch((err) => { setStatus(err.response.data.error); progressFunction(false); setErrorShadow("#ED6418 0px 7px 29px 0px") })
    }
    const handleChange = (e) => {
        setStatus("");
        setErrorShadow("");
        const { value, name } = e.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    return (
        <div style={{}}>
            <Container maxWidth={"sm"} >
                <Box bgcolor={""} style={{
                    background: "#F0F0F0", padding: "20px", borderRadius: "5px",
                    // boxShadow: errorShadow
                }}>
                    <Typography variant={"h5"} align={"center"} style={{
                        color: "#ed6418",
                        marginBottom: "20px",
                        fontWeight: "600"
                    }} >
                        ACCESSO
                    </Typography>
                    <input
                        type="email"
                        onChange={handleChange}
                        placeholder="E-mail"
                        style={{ width: "100%", padding: "5px", fontSize: "15px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                        name="enterEmail"
                    />

                    <input
                        onChange={handleChange}
                        name="enterPassword"
                        type="password"
                        placeholder="parola d’ordine"
                        style={{ width: "100%", padding: "5px", fontSize: "15px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <br />
                    <Typography align='center' size={'medium'} style={{ color: "red", fontWeight: "bold", fontSize: "13px" }}>{
                        progress ? <><CircularProgress style={{ fontSize: "10px", width: "20px", height: "20px", color: "#ed6418" }} /></> : status
                    }</Typography>
                    <Button disableElevation variant="contained" onClick={() => {
                        login(); progressFunction(true)
                    }} fullWidth style={{ marginTop: "30px", marginBottom: "20px", background: "#ed6418", color: "white" }}>Accesso</Button>
                    {/* <span style={{ color: "#ed6418", cursor: "pointer", }}>Account non creato? <snap style={{ fontWeight: "bold" }} onClick={() => { Props.cb(false) }}>Registro</snap></span> */}
                </Box>
            </Container>
        </div >
    )
}
export default Login;

