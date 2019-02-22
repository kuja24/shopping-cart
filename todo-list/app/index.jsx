// initialize react here
import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';

import Inventory from './components/Inventory';

class App extends React.Component {
  
  state = {
    inventory: [ {
      name:'laptop',
      price : 20000,
      done : false,
    }],
   cart : [{
     name:'sample cartItem',
     price: 20
     }],
     newItem:''
  };

  handleNewItemChange = e =>
    this.setState({
      newItem: e.target.value,
    });

  handleAddNewItem = () => {
    const { inventory, newItem } = this.state;

    inventory.push({
      title: newItem,
      done: false,
    });

    this.setState({
      inventory,
      newItem: '',
    });
  };

  
  updateItem = (index, done) => {
    const { inventory } = this.state;

    inventory[index].done = done;
    this.setState({ list });

  };

  updateCart = (index,done)=>{
    const {cart , inventory} = this.state;
    cart.push({
      name: inventory[index].name,
      price:inventory[index].price
    })
    this.setState({cart});    

  };
  render() {
    const { inventory,cart, newItem } = this.state;

    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <Inventory items={inventory} updateItem={this.updateItem} updateCart = {this.updateCart} />
        <input type="text" value={newItem} onChange={this.handleNewItemChange} />
        <button onClick={this.handleAddNewItem}>Add New</button>
        <div id="cart-list">{cart}</div>
      </React.Fragment>
    );
  }
}

