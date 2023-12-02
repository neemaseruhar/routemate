import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Contacts = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/')
    console.log('navigated to home')
  }
  return (
    <div>contacts

<button onClick={handleClick}>handle contacts</button>
    </div>
  )
}
