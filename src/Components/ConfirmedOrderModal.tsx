import React from 'react'
import { useModal } from '../context/ModalContext'

import { Link } from 'react-router-dom'


function ConfirmedOrderModal() {

const { closeModal, showConfirmedModal } = useModal()

  return (
    <div className={`modalBackground ${showConfirmedModal?"showConfirmedModal": ""}`}>
        <div className="confirmedModalWrapper">
            <div className={`confirmedModal ${showConfirmedModal?"slideConfirmedModal": ""}`} >
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                  <circle className="checkmarkCircle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmarkCheck" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <h3>THANK YOU <br/> FOR YOUR ORDER</h3>
                <p>You will receive an email confirmation shortly.</p>
                <div>

                </div>
                <Link to="/"><button className="buttonOne" onClick={closeModal}>BACK TO HOME</button></Link>
            </div>
        </div>
        <div className={`modalBackdrop ${showConfirmedModal?"backdropFade": ""}`}/>
    </div>
  )
}

export default ConfirmedOrderModal