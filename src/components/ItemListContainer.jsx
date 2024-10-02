import React from 'react'

const ItemListContainer = (props) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">{props.greeting}</li> {/* Accede a props.item, por ejemplo */}
    </ul>
  )
}

export default ItemListContainer