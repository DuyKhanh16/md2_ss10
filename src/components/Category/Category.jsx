import React, { useState } from 'react'
import {Outlet,Link} from 'react-router-dom'
export default function Category() {
    const [category,setCategory]=useState([
        {
            name:"Iphones",
            id:111,
            product: [
                {
                    id:Math.floor(Math.random()*9999),
                    name:"iphone1",
                    price:500
                },
                {
                    id:Math.floor(Math.random()*9999),
                    name:"iphone2",
                    price:600
                },
                
            ]

        },
        {
            name:"Cakes",
            id:222,
            product: [
                {
                    id:Math.floor(Math.random()*9999),
                    name:"cake1",
                    price:500
                },
                {
                    id:Math.floor(Math.random()*9999),
                    name:"cake2",
                    price:600
                },
                
            ]

        },
        {
            name:"Alcolho",
            id:333,
            product: [
                {
                    id:Math.floor(Math.random()*9999),
                    name:"bakich",
                    price:200
                },
                {
                    id:Math.floor(Math.random()*9999),
                    name:"taomeo",
                    price:800
                },
                
            ]

        }
    ])
  return (
    <div>
        Category
        {category.map((item)=>{
            return  <li key={item.id}>
            <Link to={`/category/${item.id}`}> {item.name}</Link>
         </li>
           
        })}
        <Outlet></Outlet>


    </div>
  )
}
