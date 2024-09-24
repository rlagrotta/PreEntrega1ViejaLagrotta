import React from 'react'

const NavBar = () => {
  return (
    <div className="container">
    <div className="navBar">
      <div className="navBar__topBar__group1">
        <div className="navBar__topBar__group1">input currency</div>
        <div className="navBar__topBar__group1__sign-in-button">Sign in</div>
        <div className="navBar__topBar__group1__account">Create an account</div>
        </div>
      </div>

      <div className="navBar__secondBar">
        <div className="navBar__secondBar__logo">logo</div>
        <div className="navBar__secondBar__menu-btns">
          <ul className='navBar__secondBar__menu-btns__mn'>
            <li>Women</li>
            <li>Men</li>
            <li>Company</li>
            <li>Stores</li>
          </ul>
        </div>
        <ul className='navBar__thirdBar'>
            <li>Search</li>
            <li>Help</li>
            <li>Cart</li>
          </ul>
        </div>
        
      </div>


  )
}

export default NavBar