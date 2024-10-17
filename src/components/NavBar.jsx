import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'

const NavBar = ({category, updateCategory}) => {

    // useEffect para observar cambios en la categoría
    useEffect(() => {

      if (category==="jewelery") {
        console.log(`La categoría seleccionada es: jewelery`)
      } else if (category===`men's clothing`){    
        console.log(`La categoría seleccionada es: men's clothing`)
      }
    }, [category]) // Se ejecutará cada vez que 'category' cambie

  function handleLadies(){
    updateCategory("jewelery")
  }

  function handleGentlemen(){
    updateCategory("men's clothing")    

  }
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="d-flex justify-content-between w-100">
    {/* Grupo 1: Marca */}
    <a class="navbar-brand" href="#">RocketStore</a>

    {/* Grupo 2: Categorías */}
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" onClick={handleLadies} href="#">Joyas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleGentlemen} href="#">Ropa de Hombres</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          La Empresa
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tiendas</a>
      </li>
    </ul>

    {/* Grupo 3: Carrito de compra */}
<CartWidget></CartWidget>
  </div>
</nav>
  )
}

export default NavBar