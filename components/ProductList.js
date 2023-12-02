import React from 'react'
import {  useParams } from 'react-router-dom'

export const ProductList = () => {
  const params= useParams();
  
  console.log(params)


  return (
    <>
      <div>ProductList-{params.id}</div>
      
    </>
  )
}
