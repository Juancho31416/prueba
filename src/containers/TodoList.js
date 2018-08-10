import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./TodoList.css";

export default class Todo extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name: 'Lista Tareas por Hacer',
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
          {task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
        </li>
      ))
      return (
        <div className="todo-list-container">
          <h2>{this.state.name}</h2>
          <div className="todo-list-option-container">
            <ol>
              {tasks}
              {
                this.state.task &&
                <li>{this.state.task}</li>
              }
            </ol>
            <div className="todo-list-form-container">
              <form name="sendTask" onSubmit={this.handleSubmit}>
                <input name="task" value={this.state.task} onChange={this.handleChange}/>
                <button type="submit" name="addTask" onClick={this.handleClick}>Agregar</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
  
  
  ;