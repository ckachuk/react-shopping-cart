import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Component/NavBar';
import Homepage from './Component/Homepage';
import Shop from './Component/Shop';
import ShoppingCart from './Component/Shopping-cart';
import Items from "./Component/Data/items.json"


function App() {
  const [cart, setCart] = useState([]);
  const itemInfo = Items;
  
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    let total = 0
    total = cart.map((item)=>{return total +=(item.price * item.quantity)})
    setTotalPrice(total); 
  },[cart])
  
  const checkItemCart = (item)=>{
    return cart.includes(item);
  }

  const setItemToCart = (e)=>{
    const item = itemInfo.filter((itm)=>{ return itm.name === e.target.value }) 
    if(checkItemCart(item[0])){
      const cartItemIndex = cart.filter((itmCart)=>{return itmCart.name === e.target.value})[0].index;
      const newArray = [...cart];
      newArray[cartItemIndex].quantity = newArray[cartItemIndex].quantity + 1;
      setCart(newArray);
    }
    else{
      item[0]['quantity'] = 1;
      item[0]['index'] = cart.length;
      setCart(cart.concat(item[0]));
    }
  }

  const incrementItemQuantity = (e)=>{
    const cartItemIndex = cart.filter((itmCart)=>{return itmCart.name === e.currentTarget.value})[0].index;
    const newArray = [...cart];
  
    newArray[cartItemIndex].quantity = newArray[cartItemIndex].quantity + 1;
    setCart(newArray);
  }

  const decreaseItemQuantity = (e)=>{
    const cartItemIndex = cart.filter((itmCart)=>{return itmCart.name === e.currentTarget.value})[0].index;
    const newArray = [...cart];
    newArray[cartItemIndex].quantity > 1? newArray[cartItemIndex].quantity = newArray[cartItemIndex].quantity - 1: newArray[cartItemIndex].quantity = 1;
    
    setCart(newArray);
  } 

  const removeItemCart = (e)=>{
    const newArray = cart.filter((itmCart)=>{return itmCart.name !== e.currentTarget.value});
    updateIndexCart(newArray)
    setCart(newArray);

  }

  const updateIndexCart = (array)=>{
    array.map((item, index)=>{
       return item.index = index
    })
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItemsNumber={cart.length}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/react-shopping-cart' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop items={itemInfo} setItemToCart={setItemToCart}/>}/>
          <Route path='/shopping-cart' element={<ShoppingCart totalPrice={totalPrice[cart.length -1]} cartItems={cart} incrementItemQuantity={incrementItemQuantity} decreaseItemQuantity={decreaseItemQuantity} removeItemCart={removeItemCart}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
