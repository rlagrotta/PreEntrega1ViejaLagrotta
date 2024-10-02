import  { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleRestar = () => {

        if(count!=0){
            setCount(count-1)
        }
    }
    const handleSumar = () => {
        if(count!=stock){
        setCount(count+1)}
    }
  return (

    <div className="itemCount">
        <div className="counter d-flex">
        <button onClick={handleRestar}>-</button>
        <p>{count}</p>
        <button onClick={handleSumar}>+</button>
        </div>
        <button type="button" onClick={onAdd} class="btn btn-outline-primary">Agregar al carrito</button>
        

    </div>
  )
}

export default ItemCount