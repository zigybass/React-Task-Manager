import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css"
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Input from "./components/Input";
import TaskList from "./components/TaskList";

class App extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount = () => {
  }

  addToDo = (task) => {
    console.log(task)
    this.setState({ tasks: [...this.state.tasks, task]})
  }

  render() {

  return (

    <Router>
    <Header />
    <div className="container appCont">
      <h3>Welcome to Task Manager</h3>
      <Input addtodo={this.addToDo}/>
      <TaskList tasks={this.state.tasks} />
    </div>
    </ Router>
    
  )};
}

export default App;
