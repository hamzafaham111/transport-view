import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core'
// import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Register = (Props) => {
    const [errorShadow, setErrorShadow] = useState()
    const [recoveryEmail, setRecoveryEmail] = useState();
    const navigate = useNavigate();
    const [status, setStatus] = useState();
    const [progress, setProgress] = useState(false)
    const [color, setColor] = useState({ color: "green", fontWeight: "bold", fontSize: "10px" });
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
    })
    const history = useNavigate()
    function progressChange(val) {
        setProgress(val);
    }
    const statusChange = (val) => {
        setStatus(val);
        setProgress(false)
        setErrorShadow("#008001 0px 7px 29px 0px");
    }
    const dashboard = (val) => {
        const user = JSON.stringify(val)
        localStorage.setItem("user", user)
        alert(val.username)
        history('/dashboard')
        window.location.reload(true);
    }
    const handleChange = (e) => {
        // setRecoveryEmail(e.target.value);
        setErrorShadow("");
        const { name, value } = e.target;
        setUserInfo((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
        setStatus("");
    }

    const register = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/register`, userInfo).then((res) => {
            // statusChange();
            // setProgress(false)
            // setColor({ color: "green", fontSize: "13px" });
            dashboard(res.data.data)
            console.log(res.data.data)
        }).catch((err) => {
            setStatus(err.response.data.error);
            setProgress(false);
            setColor({ color: "red", fontSize: "13px" });
            setErrorShadow("#ED6418 0px 7px 29px 0px");
        });
    }

    return (
        <div style={{}}>
            <Container maxWidth={"sm"}>
                <Box bgcolor={""} style={{ background: "#F0F0F0", padding: "20px", borderRadius: "5px", boxShadow: errorShadow }}>
                    <Typography variant={"h5"} align={"center"} style={{
                        color: "#ed6418",
                        marginBottom: "20px",
                        fontWeight: "600"
                    }} >
                        REGISTRO
                    </Typography>
                    <input
                        type="text"
                        placeholder='nome utente'
                        name='username'
                        onChange={handleChange}
                        style={{ width: "100%", fontSize: "15px", padding: "5px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder='E-mail'
                        name='email'
                        onChange={handleChange}
                        style={{ width: "100%", fontSize: "15px", padding: "5px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder='parola d’ordine'
                        onChange={handleChange}
                        name="password"
                        style={{ width: "100%", fontSize: "15px", padding: "5px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder='Password conforme'
                        onChange={handleChange}
                        name="cpassword"
                        style={{ width: "100%", fontSize: "15px", padding: "5px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <br />

                    <Typography align='center' style={color}>{
                        progress ? <><CircularProgress style={{ fontSize: "10px", width: "20px", height: "20px", color: "#ed6418" }} /></> : status
                    }</Typography>
                    <Button onClick={() => { register(); progressChange(true) }} disableElevation variant="contained" fullWidth style={{ marginTop: "10px", marginBottom: "20px", background: "#ed6418", color: "white" }}>REGISTRO</Button>

                    <span style={{ color: "#ed6418", cursor: "pointer" }}>Account già creato? <snap style={{ fontWeight: "bold" }} onClick={() => { Props.cb(true) }}>Accesso</snap></span>
                </Box>
            </Container>
        </div >
    )
}
export default Register;

