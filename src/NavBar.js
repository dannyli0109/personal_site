import React from 'react'
import './NavBar.css'

export default function NavBar(props){
  return (
      <ul className="navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
  )
}
