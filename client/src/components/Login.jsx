// import React, { useState } from "react";
// import axios from "axios";


// export default function Login(){
//     const [Sent,setSend]=useState(false);
//     const [email,setEmail]=useState('');
//     const [otp,setOtp]=useState('');
//     const Handleotpsend=async ()=>{
//         try{
//             const res = await axios.post('http://localhost:8000/login', { email })
//             .then(res=>{
//                 if(res.data)
//                     setSend(true)
//             })
//         }catch(err){
//             console.log(err);
//         }
//     };
//     const verify=async()=>{
//         try{
//             const res = await axios.post('http://localhost:8000/login', { email,otp})
//             .then(res=>{
//                 if(res.data.success)
//                     alert('Account Created Successfully');
//                 else
//                     alert('Invalid')    
//             })
//         }catch(err){
//             console.log(err);
//         }
//     };
//     return(
//         <>
//             <h1>Login</h1>
//             <label htmlFor='email'>Enter Valid Email Address</label>
//             <input type='email' id="email" className="Email"></input>
//             <button type='button' onClick={Handleotpsend}> Send OTP </button>
//             {
//                 Sent && <div> <label htmlFor="Otp">Enter OTP </label> 
//                 <input type='password' id='Otp' className="Otp"></input>
//                 <button type='submit' onClick={verify}>Verify</button></div>
//             }
//         </>

//     )
// }


import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleOtpSend = async () => {
        try {
            const res = await axios.post('http://localhost:8000/login', { email });
            if (res.data.success) {
                setSent(true);
            } else {
                alert('Failed to send OTP');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const verify = async () => {
        try {
            const res = await axios.post('http://localhost:8000/verify-otp', { email, otp });
            if (res.data.success) {
                alert('Account Created Successfully');
            } else {
                alert('Invalid OTP');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <label htmlFor='email'>Enter Valid Email Address</label>
            <input
                type='email'
                id="email"
                className="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type='button' onClick={handleOtpSend}>Send OTP</button>
            {sent && (
                <div>
                    <label htmlFor="otp">Enter OTP</label>
                    <input
                        type='password'
                        id='otp'
                        className="Otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button type='submit' onClick={verify}>Verify</button>
                </div>
            )}
        </>
    );
}
