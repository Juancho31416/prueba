import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { configureFakeBackend } from "../helpers/fake-backend";
import "./TodoList.css";

 class Todo extends React.Component{
  userLogout(e) {
    this.props.onLogout();
    e.preventDefault();
}


    constructor(props){
      super(props)
      this.state = {
        name: 'Lista de tareas por hacer',
        count: 0,
        tasks: ['hacer programa', 'variar tareas', 'reporte errores']
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClickIndex = this.handleClickIndex.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleClick(event){
      eval(this[event.target.name]).bind(this)(event)
    }
    handleClickIndex(index, event){
      eval(this[event.target.name]).bind(this)(index, event)
    }
    handleChange(event){
      eval(this[event.target.name]).bind(this)(event)
    }
    handleSubmit(event){
      event.preventDefault()
      eval(this[event.target.name]).bind(this)(event)
    }
    task(event) {
      this.setState({task:event.target.value})
    }
    addTask(event) {
      if (!this.state.task) return
      const tasks = this.state.tasks || []
      tasks.push(this.state.task)
      this.setState({tasks:tasks, task:''})
    }
    removeTask(index, event) {
      const tasks = this.state.tasks
      tasks.splice(index, 1)    
      this.setState({tasks})
    }
    render(){
      const tasks = (this.state.tasks||[]).map((task,index)=>(
        <li>
          {task} <button name="removeTask"  className="todo-list-li-button" onClick={event=>this.handleClickIndex(index,event)}>X</button>
        </li>
      ))
      return (
        <div className="todo-list-container">
          <div className="todo-list-title">
          <h2>{this.state.name}</h2>
          </div>
          <div className="todo-list-option-container">
            <ul className="todo-list-ol">
              {tasks}
              {
                this.state.task &&
                <li className="todo-list-item">{this.state.task}</li>
              }
            </ul>
            <div className="todo-list-form-container">
              <form name="sendTask" onSubmit={this.handleSubmit}>
                <div className="todo-list-inputs">
                <input name="task" value={this.state.task} onChange={this.handleChange}/>
                <button type="submit" name="addTask" onClick={this.handleClick}>Agregar Tarea</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
  

  const mapStateToProps = (state, ownProps) => {
    return {
      
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
      
      onList: () => { dispatch(Todo()); },
      onLogout: () => { dispatch(logout()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Todo);