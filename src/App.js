import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./js/code";
import "./css/style.css"
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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

  // componentDidUpdate () {
  //   console.log("DidUpdate: " + JSON.stringify(this.state.tasks))
  // }

  addToDo = (task) => {
    const newTodo = {
      key: uuid.v4(),
      newTask: task.title,
      details: task.details
    }
    const newArr = [newTodo, ...this.state.tasks]
    this.setState({ tasks: newArr })
  }

  delTask = (id) => {
    console.log("App Del ID: " + id)
    const delArr = [...this.state.tasks.filter( task => task.key === id), ...this.state.deleted]
    const newArr = [...this.state.tasks.filter( task => task.key !== id)]
    this.setState({ tasks: newArr })
    this.setState({ deleted: delArr })
  }

  finalDel = (id) => {
    console.log(id)
    const delArr = [...this.state.deleted.filter( task => task.key !== id)]
    this.setState({ deleted: delArr })
  }

  render() {

  return (

    <Router>

    <Header />
    <Route exact path="/" component={Splash} />
    <Route path="/tasks" >
    <div className="container appCont">
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
    <Route path="/deleted">
      <Deleted deleted={this.state.deleted} finalDel={this.finalDel}/>
    </Route>
    </div>
    <Footer />
    </ Router>
    
  )};
}

export default App;
