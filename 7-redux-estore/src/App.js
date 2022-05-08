import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import NotFound404 from "./containers/NotFound404";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFound404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
