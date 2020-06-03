import React from 'react'
import classes from './Header.module.scss'
import logo from '../../dist/img/logo.png'

const Header = props => {

    const { cartItem, toggleCart } = props

    return (
        <div className = {classes.Header}>
            <div className = {classes.Header__logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className = {classes.Header__contacts}>
                <div className = {classes.Header__contacts_link}>
                    <a href = '/'>+1 234 567-89-00</a>
                </div>
                <div className = {classes.Header__contacts_link}>
                    <a href = '/'>+1 234 567-89-00</a>
                </div>
            </div>
            <button className = {classes.Header__cart} onClick = {toggleCart}>
                <p>Cart</p>
                <span></span>
                <p>{cartItem.length}</p>
            </button>

        </div>
    )
}

export default Header