import React from 'react'
import {useParams} from 'react-router-dom'
export default function Product() {
  const [useParams] = useParams()
  return (
    <div>Product</div>
  )
}
