import React, { useState } from 'react'
import Register from './Register/Register'
import Login from './Login/Login'
import LOGO from './Assets/ADCL-LOGO (2).png'
import FacebookIcon from '@material-ui/icons/Facebook';
const Index = (Props) => {
    const [state, setState] = useState(true)
    // const callBack = (val) => {
    //     setState(val);
    //     console.log("calback is working");
    // }
    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            {/* <div className='w-full flex flex-col justify-center items-center'> */}
            {/* <span className='text-3xl font-bold py-5' style={{ filter: "drop-shadow(2px 2px 2px #666666)", }}>TRANSPORT</span> */}
            {/* <img src={LOGO} className="h-64 w-44" style={{ filter: "drop-shadow(5px 5px 5px #666666)", objectFit: "cover", }} alt="ADCL Logo" /> */}
            {/* <span className='text-2xl font-bold'>YOUR TRUST OUR CONFIDENCE</span> */}
            {/* </div> */}
            <div className='w-full'>
                {
                    state ? <><Login cb={setState} p={Props.cb} /></> : <><Register cb={setState} /></>
                }
            </div>
            {/* <div className='px-2 py-1 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="35" height="35"
                    viewBox="0 0 30 30"
                    style={{ fill: "#ed6418", margin: "10px 10px" }}>
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="30" height="30"
                    viewBox="0 0 50 50"
                    style={{ fill: "#ed6418", margin: "13px 10px", }}>
                    <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="33" height="33"
                    viewBox="10 10 40 50"
                    style={{ fill: "#ed6418", margin: "14px 10px", }}>
                    <path d="M32,10c12.131,0,22,9.869,22,22s-9.869,22-22,22s-22-9.869-22-22S19.869,10,32,10z M43.798,27.551	c1.055-0.762,1.971-1.712,2.695-2.794c-1.472,0.669-3.101,0.85-3.101,0.85s1.902-1.101,2.373-2.986	c-1.042,0.618-2.198,1.068-3.428,1.31c-0.985-1.049-2.387-1.705-3.94-1.705c-2.981,0-5.398,2.418-5.398,5.398	c0,0.423,0.14,1.229,0.14,1.229s-6.514,0.039-11.126-5.641c0,0-0.71,0.949-0.73,2.715c-0.034,2.993,2.4,4.492,2.4,4.492	s-1.224,0.033-2.445-0.675c0.109,4.636,4.33,5.36,4.33,5.36s-1.363,0.262-2.438,0.093c0.687,2.144,2.681,3.706,5.042,3.749	c-1.847,1.448-4.174,2.311-6.704,2.311c-0.435,0-0.865-0.025-1.288-0.076c1.253,1.357,5.226,2.425,8.275,2.425	c9.929,0,15.357-8.225,15.357-15.358C43.813,28.015,43.808,27.783,43.798,27.551z"></path>
                </svg>
            </div> */}
        </div>
    )
}

export default Index