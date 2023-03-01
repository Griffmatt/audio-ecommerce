import React from 'react'

import {useNavigate} from "react-router-dom"

function BackButton() {

const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(-1)
  }

  return (
    <p className="backButton" onClick={handleNavigation}>Go Back</p>
  )
}

export default BackButton