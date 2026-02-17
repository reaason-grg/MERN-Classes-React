import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme)
  return (
    <div>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Skills</a>
      <a href="">Contact</a>
    </div>
  )
}

export default Navbar
