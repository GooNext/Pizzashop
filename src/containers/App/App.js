import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Cart from '../../components/Cart/Cart';

function App() {

  const[cartItem, setCartItem] = useState([])
  const[isCart, setIsCart] = useState(true)

  const toggleCart = () => {
    setIsCart(!isCart)
  }

  const addToCart = (pizza) => {
    const oldCartItem = cartItem
    cartItem.push(pizza)
    setCartItem( [...cartItem] , oldCartItem)
  }

  return (
    <div className="App">
      <div className="container">
        <Cart cartItem = {cartItem}/>
        <Header cartItem = {cartItem} toggleCart = {toggleCart}/>
        <Menu cartItem = {cartItem} setCartItem = {setCartItem} addToCart = {addToCart}/>
      </div>
    </div>
  );
}

export default App;
