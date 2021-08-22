import React from 'react'

import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className = "logo">

                <hi><Link to="/">Full Auth</Link></hi>
            </div>

            <ul>
                <li><Link to="/"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
                <li><Link to="/login"><i className="fas fa-user"></i>Sign</Link></li>

            </ul>


        </header>
    )
}
