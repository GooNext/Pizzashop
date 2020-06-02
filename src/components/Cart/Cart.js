import React from 'react'
import classes from './Cart.module.scss'

const Cart = props => {

    const {cartItem} = props

    return (
        <div className = {classes.Cart}>
            {cartItem ? 
                cartItem.map((item) => {
                return (
                    <h3>cart</h3>
                )
            }) : null}
        </div>
    )
}

export default Cart