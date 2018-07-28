import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json'
import AddForm from './componentes/AddForm'
class App extends Component {
  //Antes de pintar
  constructor(props) {
    super(props);
    this.state = {
      todos:todos
    }

  }

handleAddTodo = (todo) => {
  this.setState({
    todos:[...this.state.todos,todo]
  })
}

removeTodo = (index) =>{
  console.log(index)
  if(window.confirm('Are you sure you want to delete it?')){
    this.setState({
      todos:this.state.todos.filter((e,i) =>{
        //filter devuelve un arreglo y no agrega datos dependiendo de la condicion
        return i !== index //si una tarea es distinta  al indice que le estoy dando  lo devuelve

      })
    })
  }
}




  render() {
    //Por cada todo usar esta estructura
    const todos = this.state.todos.map((todos, i) => {

      console.log(todos)
      return (

        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h2>{todos.name}</h2>
            </div>
            <div className="card-body">
              {todos.description}
            </div>
            <p>Responsable</p>
            <h3>
              <span className="badge badge-pill  ml-2">
                {todos.responsable}
              </span>
            </h3>
            <span className="badge badge-info">Dias Restantes</span>
            <p></p>
            <span className="badge badge-success">
              {todos.daysLeft}
            </span>

            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)} >
                Delete
              </button>
            </div>
          </div>
        </div>

      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
          Tasks
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
        </a>
      </nav>

      <div className="container">
        <div className="row mt-4">

          <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <AddForm onAddTodo={this.handleAddTodo}/>

          </div>

          <div className="col-md-8">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
