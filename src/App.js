import React from "react";
import "./App.css";
import ShopGrid from "./Screens/ShopGrid";
import ShopLeft from "./Screens/ShopLeft";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopList from "./Screens/ShopList";
import ProductDetails from "./Screens/ProductDetails";
import ShoppingCart from "./Screens/ShoppingCart";
import Completed from "./Screens/Completed";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { userContext } from './context/userContext';
import { useState } from 'react';
import Blog from "./Screens/Blog";
import AboutUs from "./Screens/AboutUs";
import Faq from "./Screens/Faq";
import Error from "./Screens/Error";
import Contact from "./Screens/Contact";
import BlogSingle from "./Screens/BlogSingle";
import HektoDemo from "./Screens/HektoDemo";
import Idris from "./Screens/Idris";
import {CartProvider} from "react-use-cart"
import Homepage from "./Screens/Home/Homepage";

function App() {
  const [jwt, setJwt]  = useState("");
  const [user, setUser]  = useState("");

  return (
    <div>
    <CartProvider>
    <userContext.Provider value={{jwt, setJwt, user, setUser}}>
     <BrowserRouter>
     <Routes>
     <Route path="/cart" element={<ShoppingCart/>} /> 
     <Route path="/shop" element={<ShopList/>} />
     <Route path="/demo" element={<HektoDemo/>} />
     <Route path="/" element={<Homepage/>}/> 
     <Route path="/grid" element={<ShopGrid/>} />
     <Route path="/left" element={<ShopLeft/>} />
     <Route path="/reg" element={<Register/>} />
     <Route path="/list" element={<ShopList/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/success" element={<Completed/>} /> 
     <Route path ="/products/:id" element = {<ProductDetails/>}/>
     <Route path ="/blog" element = {<Blog/>}/>
     <Route path="/blog/:id" element={<BlogSingle />} />
     <Route path ="/faq" element = {<Faq/>}/>
     <Route path ="/error" element = {<Error/>}/>
     <Route path ="/contact" element = {<Contact/>}/>
     <Route path ="/about" element = {<AboutUs/>}/>
     <Route path ="/idris" element = {<Idris/>}/>
     </Routes>

      </BrowserRouter>
      </userContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
