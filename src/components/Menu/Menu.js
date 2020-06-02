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
            priceUSD: 20,
            priceEUR: 17,
            description: 'Tomato sauce, spicy pepperoni, mozzarella',
            img: pizzaImg,
            id: 1
        },
        {
            name: 'Pepperoni',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Chorizo, chicken, tomatoes, sweet pepper, red onion, garlic, mozzarella, ranch sauce, Burger sauce',
            img: pepperoni,
            id: 2
        },
        {
            name: 'Cheese chicken',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Cheese sauce, chicken, tomatoes, mozzarella',
            img: chicken,
            id: 3
        },
        {
            name: 'Ham and mushrooms',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Tomato sauce, mozzarella, ham, mushrooms',
            img: hammushrooms,
            id: 4
        },
        {
            name: 'Spanish chorizo 🌶',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Fresh tomatoes, spicy chorizo, mozzarella, chipotle sauce',
            img: chorizo,
            id: 5
        },
        {
            name: 'Cheesy 🌱',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Tomato sauce, mozzarella',
            img: cheesy,
            id: 6
        },
        {
            name: 'Ham and cheese',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Cream sauce, mozzarella, ham',
            img: hamcheese,
            id: 7
        },
        {
            name: 'Cheeseburger pizza',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Burger sauce, Bolognese meat sauce, tomatoes, pickles, red onion, mozzarella',
            img: cheesburger,
            id: 8
        },
        {
            name: 'Supermeat 🌶',
            priceUSD: 20,
            priceEUR: 17,
            description: 'Spicy chorizo, beef meatballs, tomato sauce, chicken, spicy pepperoni, mozzarella, bacon',
            img: supermeat,
            id: 9
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