import React from 'react';

import InventoryItem from '../InventoryItem';

const Inventory = props => {
  const { items, updateItem,updateCart } = props;

  return (
    <ul className="col-12 col-md-4">
      {items.map(({ name,price, done }, index) => (
        <InventoryItem key={index} name={name} price={price} done={done} addToCart={()=>updateCart(index,!done)} toggleStatus={() => updateItem(index, !done)} />
      ))}
    </ul>
  );
};

export default Inventory;
