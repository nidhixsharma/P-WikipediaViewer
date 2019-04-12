import React from 'react'
import './Header.css'

const Header =()=>{
return (
    <div className="Header">
        <h1>Wikipedia Viewer</h1>
        <div className="Anchor">
        <a className="item" href ="/home">Home</a>
        {/* <a className="item" href ="/about">About</a>
        <a className="item" href ="/contact">Contact</a> */}
        </div> 
    </div>
)
}
export default Header;