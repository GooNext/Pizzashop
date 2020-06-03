import React, { useState } from 'react'
import classes from './Cart.module.scss'

const Cart = props => {

    let {cartItem, isCart, totalPrice, setTotalPrice} = props
    let[count, setCount] = useState(1)

    const addCount = (item) => {
        setCount(item.count += 1, count)
        item.priceUSD = item.priceUSD += item.countPrice
        setTotalPrice(totalPrice + item.countPrice)
    }

    const removeCount = (item) => {
        setCount(item.count -= 1)
        item.priceUSD = item.priceUSD -= item.countPrice
        setTotalPrice(totalPrice - item.countPrice)
        
        if(item.priceUSD <= 0 && item.count <= 0){
            setCount(item.count += 1)
            item.priceUSD = item.priceUSD += item.countPrice
        }
    }
    
    return (
        <div className = {`${classes.Cart} ${isCart ? classes.Cart__active : null} `}>
            <div className = {classes.Cart__title}>
                <div className = {classes.Cart__title_text}>
                    <h2>Cart</h2>
                    <p>Add something from the menu</p>
                </div>
                <div className = {classes.Cart__title_order}>
                    <h4>Total price : {totalPrice}$</h4>
                    <button>To order</button>
                </div>
            </div>
            <div className = {classes.Cart__flex}>
                {cartItem ? 
                    cartItem.map((item, index) => {
                    return (
                        <div className = {classes.Cart__item} key = {index}>
                            <img src={item.img} alt=""/>
                            <div className = {classes.Cart__item_text}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className = {classes.Cart__item_price}>
                                    <h4>{item.priceUSD}$</h4>
                                    <div className = {classes.Cart__item_add}>
                                        <span onClick = {removeCount.bind(this, item)}></span>
                                        <p>{item.count}</p>
                                        <span onClick = {addCount.bind(this, item)}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Cart