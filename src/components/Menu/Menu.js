import React from 'react'
import classes from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import pizzaImg from '../../dist/img/pizza.png'
import pepperoni from '../../dist/img/pepperoni.jpg'
import chicken from '../../dist/img/chicken.jpg'
import hammushrooms from '../../dist/img/hammushrooms.jpg'
import chorizo from '../../dist/img/chorizo.jpg'
import cheesy from '../../dist/img/cheesy.jpg'
import hamcheese from '../../dist/img/hamcheese.jpg'
import cheesburger from '../../dist/img/cheesburger.jpg'
import supermeat from '../../dist/img/supermeat.jpg'

const Menu = props => {

    const { addToCart } = props 

    const pizzaList = [
        {
            name: 'Margarita',
            priceUSD: 10,
            priceEUR: 17,
            description: 'Tomato sauce, spicy pepperoni, mozzarella',
            img: pizzaImg,
            id: 1,
            countPrice: 10,
            count: 1
        },
        {
            name: 'Pepperoni',
            priceUSD: 11,
            priceEUR: 17,
            description: 'Chorizo, chicken, tomatoes, sweet pepper, red onion, garlic, mozzarella, ranch sauce, Burger sauce',
            img: pepperoni,
            id: 2,
            countPrice: 11,
            count: 1
        },
        {
            name: 'Cheese chicken',
            priceUSD: 13,
            priceEUR: 17,
            description: 'Cheese sauce, chicken, tomatoes, mozzarella',
            img: chicken,
            id: 3,
            countPrice: 13,
            count: 1
        },
        {
            name: 'Ham and mushrooms',
            priceUSD: 14,
            priceEUR: 17,
            description: 'Tomato sauce, mozzarella, ham, mushrooms',
            img: hammushrooms,
            id: 4,
            countPrice: 14,
            count: 1
        },
        {
            name: 'Spanish chorizo 🌶',
            priceUSD: 12,
            priceEUR: 17,
            description: 'Fresh tomatoes, spicy chorizo, mozzarella, chipotle sauce',
            img: chorizo,
            id: 5,
            countPrice: 12,
            count: 1
        },
        {
            name: 'Cheesy 🌱',
            priceUSD: 18,
            priceEUR: 17,
            description: 'Tomato sauce, mozzarella',
            img: cheesy,
            id: 6,
            countPrice: 18,
            count: 1
        },
        {
            name: 'Ham and cheese',
            priceUSD: 9,
            priceEUR: 17,
            description: 'Cream sauce, mozzarella, ham',
            img: hamcheese,
            id: 7,
            countPrice: 9,
            count: 1
        },
        {
            name: 'Cheeseburger pizza',
            priceUSD: 17,
            priceEUR: 17,
            description: 'Burger sauce, Bolognese meat sauce, tomatoes, pickles, red onion, mozzarella',
            img: cheesburger,
            id: 8,
            countPrice: 17,
            count: 1
        },
        {
            name: 'Supermeat 🌶',
            priceUSD: 14,
            priceEUR: 17,
            description: 'Spicy chorizo, beef meatballs, tomato sauce, chicken, spicy pepperoni, mozzarella, bacon',
            img: supermeat,
            id: 9,
            countPrice: 14,
            count: 1
        },
    ]

    return (
        <div className = {classes.Menu}>
            {pizzaList.map((pizza, index) => {
                return (
                    <MenuItem key = {index} pizza = {pizza} addToCart = {addToCart}/>
                )
            })}
        </div>
    )
}

export default Menu