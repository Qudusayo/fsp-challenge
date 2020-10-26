import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/logo.png'
import './style.scss'

function index() {
    return (
        <div className="Navbar">
            <div><small><img src={logo} alt="logo" style={{width: '3em'}} /></small></div>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active-link" to="/" exact>Home</NavLink></li>
                    <li><NavLink activeClassName="active-link" to="/login">Login</NavLink></li>
                    <li><NavLink activeClassName="active-link" to="/register">Register</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default index
