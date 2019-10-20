import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css"
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Login from "./components/pages/Login"

class App extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount = () => {
  }

  addToDo = (task) => {
    console.log(task)
    const newTodo = {
      id: 1,
      newTask: task.title,
      details: task.details
    }
    this.setState({ tasks: [...this.state.tasks, newTodo]})
    console.log(this.state.tasks)
  }

  render() {

  return (

    <Router>
    <Header />
    <Route path="/tasks" >
    <div className="container appCont">
      <h3>Welcome to Task Manager</h3>
      <Input addtodo={this.addToDo}/>
      <TaskList tasks={this.state.tasks} />
    </div>
    </Route>
    <Route path="/login" component={Login} />

    </ Router>
    
  )};
}

export default App;
