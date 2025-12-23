import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
     <nav style={{ padding: "10px", background: "#222",position: "fixed",top:0,left:0,right:0,} }>
            <Link to="/" style={{ color: "white", marginRight: "10px" }}>
              Home
            </Link>
            <Link to="/about" style={{ color: "white", marginRight: "10px" }}>
              About
            </Link>
            <Link to="/contact" style={{ color: "white" }}>
              Contact
            </Link>
          </nav>
  )
}
