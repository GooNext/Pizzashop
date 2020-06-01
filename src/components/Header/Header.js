import React from 'react'
import classes from './Header.module.scss'
import logo from '../../dist/img/logo.png'

const Header = () => {
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
            <div className = {classes.Header__cart}>
                <p>Cart</p>
                <span></span>
                <p>1</p>
            </div>

        </div>
    )
}

export default Header