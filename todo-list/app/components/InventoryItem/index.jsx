import React from 'react';

import './style.scss';

const InventoryItem = ({ name,price, done ,addToCart, toggleStatus }) => (
  <li className="list-item">
    <span className="title">{name }</span>
    <button className="btn btn-success" onClick={addToCart}> add to cart</button>
    <input type="checkbox" className="status" value={done} onClick={toggleStatus} />
  </li>
);

export default InventoryItem;
