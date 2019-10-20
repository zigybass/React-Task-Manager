import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css"
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Login from "./components/pages/Login";
import uuid from "uuid";
import Splash from "./components/pages/Splash";

class App extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount = () => {
  }

  addToDo = (task) => {
    console.log(task)
    const newTodo = {
      key: uuid.v4(),
      newTask: task.title,
      details: task.details
    }
    this.setState({ tasks: [newTodo, ...this.state.tasks]})
  }

  render() {

  return (

    <Router>

    <Header />
    <Route exact path="/" component={Splash} />
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
