import React from 'react'
import { useModal } from '../context/ModalContext'

import { Link } from 'react-router-dom'


function ConfirmedOrderModal() {

const { closeModal, showConfirmedModal } = useModal()

  return (
    <div className={`modalBackground ${showConfirmedModal?"showConfirmedModal": ""}`}>
        <div className="confirmedModalWrapper">
            <div className={`confirmedModal ${showConfirmedModal?"slideConfirmedModal": ""}`} >
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
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