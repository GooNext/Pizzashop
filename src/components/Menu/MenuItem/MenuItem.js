import React from 'react'
import classes from './MenuItem.module.scss'

const MenuItem = props => {

    const { pizza, addToCart } = props

    return (
        <div className = {classes.MenuItem}>
            <div className = {classes.MenuItem__text}>
                <img src={pizza.img} alt="img" width = "100%"/>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
            </div>
            <div className = {classes.MenuItem__price}>
                <h2>{pizza.priceUSD}$</h2>
                <button onClick = {addToCart.bind(this, pizza)}>Add to cart</button>
            </div>
        </div>
    )
}

export default MenuItem
