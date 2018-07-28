import React, { Component } from 'react';

export default class AddForm extends Component {
  constructor () {
    super();
    this.state = {

      name: '',
      description:'',
      responsable: '',
      daysLeft: ''

    };


  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      name: '',
      description:'',
      responsable: '',
      daysLeft: ''
    });
  }



//Atrapo el contenido del input y lo muestro en consola!
  handleInputChange = (e) => {
    console.log(e.target.value)
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }



  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              value={this.state.responsable}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="daysLeft"
              className="form-control"
              value={this.state.daysLeft }
              onChange={this.handleInputChange}
              placeholder="Deadline"
              />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}
