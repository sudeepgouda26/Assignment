import React from 'react'
import "../Styles/SubmitBtn.css"
function SubmitButton({onSubmit}) {
  return (
    <div>
      
      <button type="button" onClick={onSubmit} className="submit-button">
      Submit
    </button>





    </div>
  )
}

export default SubmitButton
