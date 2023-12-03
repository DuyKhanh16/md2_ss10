import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

export default function CategoryDetails() {
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
    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect (()=>{
        let resultProduct = category.find((item)=>{
            return item.id == categoryId
        })
        setProducts(resultProduct.product)
    },[categoryId]) //đefendency
    console.log(products);
  return (
    <div>
        CategoryDetails
        {products.map((item)=> 
            <li key={item.id}>
                name: {item.name}
                price: {item.price}
            </li>)
        }
    </div>
  )
}
