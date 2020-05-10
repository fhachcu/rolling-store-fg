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
      ],
      results:[],
      term:''
    }
  }

  updateTerm(term){
    this.setState({ term })
  }

  updateList(newList, term){
    const { products } = this.state;

    term !== ''?
      this.setState({
        results: newList,
        term
      }):
      this.setState({results: products})
  }

  render() {
    const { userName, products, term, results } = this.state;
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);
    return (
      <Router>
        <Switch>
        <Route path="/" exact>
            <div className="App-container">
              <Main 
                  userName={userName} 
                  products={products}
                  updateTerm={updateTerm}
                  term={term}
                  updateList={updateList}
                />
            </div>
          </Route>
          <Route path="/results">
            <div className="App-container">
              <Results 
                  userName={userName} 
                  products={products}
                  updateTerm={updateTerm}
                  results={results}
                  updateList={updateList}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}


