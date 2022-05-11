import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className="nav" >
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    )
}