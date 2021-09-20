import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const link = {
        padding: "8px 10px",
        margin: "0 3px",
        color: "#ffff",
        textDecoration: "none"
    }

    return (
        <>
            <NavLink style={link} to="/">Home</NavLink>
            <NavLink to="/aboutUs" style={link} activeStyle={{ backgroundColor: "navy" }}>About Us</NavLink>
            <NavLink to="services" style={link} activeStyle={{ backgroundColor: "navy" }}>Services</NavLink>
            <NavLink to="getEstimate" style={link} activeStyle={{ backgroundColor: "navy" }}>Get Estimate</NavLink>
        </>
    )
}

export default Navbar