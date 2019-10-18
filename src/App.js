import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css"
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Input from "./components/Input"

class App extends React.Component {

  state = {

  }

  render() {

  return (

    <Router>
    <Header />
    <div className="container appCont">
      <h3>Welcome to Task Manager</h3>
      <Input />
    </div>
    </ Router>
    
  )};
}

export default App;
