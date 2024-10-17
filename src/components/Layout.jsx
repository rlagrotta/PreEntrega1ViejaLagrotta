import { useState } from 'react';
import '../App.css'
import NavBar from '../components/NavBar'
import ItemContainerRP from './ItemContainerRP';

  const handleAddToCart = (quantity) => {
    // Aquí puedes hacer lo que necesites con la cantidad de items agregados
    console.log(`Has agregado ${quantity} items al carrito.`);
    // Lógica adicional: actualizar el carrito, mostrar una alerta, etc.
  };


function Layout(/* {children} */) {
  const [category, setCategory] = useState("men's clothing");

    // Función para actualizar la categoría desde el componente hijo
    const updateCategory = (newCategory) => {
      setCategory(newCategory);
    };


  return (
    <>
    <NavBar updateCategory={updateCategory}/>
    <ItemContainerRP category={category}/>
{/*     <CounterWithState/>
    <CounterWithRef/> */}
    </>
  )
}

export default Layout
