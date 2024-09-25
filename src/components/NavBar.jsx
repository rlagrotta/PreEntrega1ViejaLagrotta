import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="d-flex justify-content-between w-100">
    {/* Grupo 1: Marca */}
    <a class="navbar-brand" href="#">RocketStore</a>

    {/* Grupo 2: Categorías */}
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Women</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Men</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Company
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Stores</a>
      </li>
    </ul>

    {/* Grupo 3: Carrito de compra */}
<CartWidget></CartWidget>
  </div>
</nav>
  )
}

export default NavBar