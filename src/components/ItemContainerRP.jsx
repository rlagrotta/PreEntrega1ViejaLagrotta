import React, { useEffect, useState } from 'react';

const ItemContainerRP = ({ category }) => {
  const [data, setData] = useState([]);

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
    <li key={item.id}>
      {item.title} - ${item.price}
    </li>
  ));

  return (
    <div className='row-wrapper'>
      <ul>
        {listItems.length > 0 &&{data} ? listItems : {data}? <li>Cargando Items</li> : <li>No hay productos disponibles en esta categoría.</li>}
      </ul>
    </div>
  );
}

export default ItemContainerRP;