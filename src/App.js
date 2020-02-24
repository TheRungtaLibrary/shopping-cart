import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ShoppingProvider, ShoppingConsumer} from "./contexts/ShoppingContext";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <ShoppingProvider>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/">
                <ShoppingConsumer>
                  {({cartItems}) =>
                    <Header cart={cartItems}/>
                  }
                </ShoppingConsumer>
                <ShoppingConsumer>
                  {({products}) =>
                    <ProductList products={products}/>
                  }
                </ShoppingConsumer>
            </Route>
          </Switch>
        </Router>
      </div>
    </ShoppingProvider>
  );

}

export default App;
