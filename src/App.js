import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Results from './components/Results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Facu',
      products: [
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
      <Router>
        <switch>
          <Route path="/" exact>
            <div className="App-container">
              <Main userName={userName} products={products} />
            </div>
          </Route>
          <Route path="/results">
            <div className="App-container">
              <Results userName={userName} products={products} />
            </div>
          </Route>
        </switch>
      </Router>

    );
  }
}


