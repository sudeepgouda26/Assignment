import React from 'react'
import '../Styles/InputField.css'; // Relative path from components to styles/components


function InputField({value, onchange, index}) {
  return (
    <div className='input-box'>
      <input 
      type="text"
      value={value}
      onchange={(e)=>  onchange(e, index)} 
      maxLength="1"
      pattern='[0-9]*'
      className='otp-input'
      id={`otp-input-${index}`}
      />
    </div>
  )
}

export default InputField
