import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./css/style.css"

class App extends React.Component {

  state = {

  }

  render() {

  return (

    <Router>
    <Header />
    <div className="container">
      <h1>Task Manager</h1>
    </div>
    <Footer />
    </ Router>
    
  )};
}

export default App;
