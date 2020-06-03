import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Cart from '../../components/Cart/Cart';

function App() {

  const[cartItem, setCartItem] = useState([])
  const[isCart, setIsCart] = useState(false)
  let[totalPrice, setTotalPrice] = useState(0)

  const toggleCart = () => {
    setIsCart(!isCart)
  }

  const addToCart = (pizza) => {
    const oldCartItem = cartItem
    cartItem.push(pizza)
    setCartItem( [...cartItem] , oldCartItem)
    setTotalPrice(totalPrice += pizza.priceUSD)
  }

  return (
    <div className="App">
      <div className="container">
        <Cart cartItem = {cartItem} isCart = {isCart} totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
        <Header cartItem = {cartItem} toggleCart = {toggleCart}/>
        <Menu cartItem = {cartItem} setCartItem = {setCartItem} addToCart = {addToCart}/>
      </div>
    </div>
  );
}

export default App;
