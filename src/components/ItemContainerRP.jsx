import React, { useEffect, useState } from 'react';

const ItemContainerRP = ({ category }) => {
  const [data, setData] = useState([]);

  function handleLinks(e){
    const value = /* JSON.parse */(e.target.getAttribute("data-value"));
    console.log(value)
    }

  
  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Error al obtener los productos.');
          }
          return res.json();
        })
        .then(json => {
          console.log(`Datos de la API para la categoría ${category}:`, json);
          setData(json);
        })
        .catch(error => console.error("Hubo un error:", error));
    }
  }, [category]);

  // Normalizar la categoría para evitar problemas con apóstrofes y mayúsculas/minúsculas
  const filteredData = data.filter(item => 
    item.category.toLowerCase().replace(/['"]+/g, '') === category.toLowerCase().replace(/['"]+/g, '')
  );

  const listItems = filteredData.map(item => (
    <div className="card" key={item.id} style={{"width": "18rem"}}>
      <img 
        className="card-img-top" 
        src={item.image} 
        alt="Card image cap" 
        style={{"width": "100%", "height": "200px", "objectFit": "cover"}} // Asegura que todas las imágenes tengan el mismo tamaño
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a href="#" data-value={`products/?${item.id}`} onClick={handleLinks} className="btn btn-primary">See more</a>
      </div>
    </div>
  ));

  return (
    <div className='row-wrapper mt-3 justify-content-center d-flex'>
      <div className='row' style={{"justify-content": "space-evenly", "width":"90%"}}>
        {listItems.length > 0 
          ? listItems 
          : data.length === 0 
            ? <li>Cargando Items</li> 
            : <li>No hay productos disponibles en esta categoría.</li>}
      </div>
    </div>
  );
}

export default ItemContainerRP;