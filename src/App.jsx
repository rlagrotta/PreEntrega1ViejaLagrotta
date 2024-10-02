import './App.css'
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'

  const handleAddToCart = (quantity) => {
    // Aquí puedes hacer lo que necesites con la cantidad de items agregados
    console.log(`Has agregado ${quantity} items al carrito.`);
    // Lógica adicional: actualizar el carrito, mostrar una alerta, etc.
  };


function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemCount stock={5} initial={1}/>
    <ItemCount stock={5} initial={2} onAdd={handleAddToCart}/>
    </>
  )
}

export default App
