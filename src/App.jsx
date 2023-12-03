
import React, {lazy,Suspense} from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import News from './components/News/News'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import NotFound from './components/NotFound/NotFound'
import Category from './components/Category/Category'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'


export default function App() {
  const abc = useNavigate();
  const handleClick = ()=>{
    // trong dấu ngoặc truyền path vào
    abc("")
  }
  const Lazy = lazy(()=>{
    return new Promise(resole => {
      setTimeout(()=> resole(import("./components/About/About")),3000)
    })
  })

  return (
    <>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>

        </li>
        <li>
        <NavLink to="/news">News</NavLink>

        </li>
        <li>
        <NavLink to="/contact">Contact</NavLink>

        </li>
      </ul>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <Suspense>
            <Lazy></Lazy>
          </Suspense>
        }></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/product/:idProduct' element={<Product></Product>}></Route>
        <Route path='/category' element={<Category></Category>}>
          <Route path=":categoryId" element={<CategoryDetails></CategoryDetails>}> </Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <button onClick={handleClick}>Quay về trang chủ</button>
    </>
  )
  
}
