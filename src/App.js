import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName:'Facu',
      products:[
        {
          id: 'prod01',
          name: 'notebook',
          brand: 'Asus',
          price: 19000,
        },
        {
          id: 'prod02',
          name: 'cellphone',
          brand: 'Samsung',
          price: 30000,
        },
        {
          id: 'prod03',
          name: 'game ps4',
          brand: 'Dark Souls',
          price: 2000,
        }
      ]
    }
  }

  render() {
    const { userName, products } = this.state;
    return (
      <div className="App">
        <header className="App-container">
          <Main userName={userName} products={products} />
        </header>
      </div>
    );
  }
}


