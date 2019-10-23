import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./js/code";
import "./css/style.css"
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Login from "./components/pages/Login";
import uuid from "uuid";
import Splash from "./components/pages/Splash";
import Deleted from "./components/pages/Deleted"

class App extends React.Component {

  state = {
    tasks: [],
    deleted: []
  }

  componentDidUpdate () {
    console.log(this.state.tasks)
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

  delTask (id) {
    console.log("del from App " + id)
    console.log(this.state.tasks)
    this.setState({ tasks: this.state.tasks.filter( task => task.key !== id)})
    this.setState({ deleted: [...this.state.deleted]})
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
     
      <TaskList tasks={this.state.tasks} delTask={this.delTask} />
    </div>
    </Route>
    <Route path="/login">
      <div className="container appCont">
        <Login />
      </div>
    </Route>
    <div className="container contApp">
    <Route path="/deleted" deleted={this.state.deleted} component={Deleted} />
    </div>

    </ Router>
    
  )};
}

export default App;
