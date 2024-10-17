import React, { useEffect, useState } from 'react';

const ItemContainerRP = ({ category }) => {


  const [data, setData] = useState([]);
/*   const [category, setCategory] = useState({updateCategory});  */

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        console.log(json);
      })
      .catch(error => console.error("Hubo un error", error));
  }, [category]);

  const filteredData = data.filter(item => item.category === category);
  console.log(`Productos en la categoría ${category}:`, filteredData);

  const listItems = filteredData.map(item => (
    <li key={item.id}>
      {item.title} - ${item.price}
    </li>
  ));

  return (
    <div className='row-wrapper'>
      <ul>
        {listItems.length > 0 ? listItems : <li>No hay productos disponibles en esta categoría.</li>}
      </ul>
    </div>
  );
}

export default ItemContainerRP;