import React, { useState } from 'react'
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import "../Styles/OTOForm.css"

function OTPForm() {

    const [otp, SetOtp]=useState(["","","",""]);
    const [error,SetError]=useState("");

     const handleChange=(e, index)=>{
       const newOtp =[...otp];
       newOtp[index]=e.target.value.slice(-1);
       SetOtp(newOtp);

       if(e.target.value && index<3){
        document.getElementById(`otp-input-${index+1}`).focus()
        
       }
       SetError("")

     }
 const handleSubmit=()=>{
  
    const otpvalue = otp.join('');
  if(otpvalue.length ===4){
    console.log('OTP Submitted:', otpvalue);
  }
  else{
    console.log(`the otp is ${otpvalue}`)
  }
 }


  return (
    <div>
       
        <div className="otp-form">
        <h3>Chai aur Code</h3>
      <h2>Enter OTP</h2>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <InputField
            key={index}
            value={value}
            onChange={ (e) => handleChange(e, index)}
            index={index}
          />
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      < SubmitButton onSubmit={handleSubmit} />
    </div>
      
    </div>
  )
}

export default OTPForm
