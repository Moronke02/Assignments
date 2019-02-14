import React from 'react'

class  StateComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  state = {
    count: 0,
    task: ''
  };
  handleClick() {
    this.setState({count : this.state.count + 1})
  }
  handleChange = (event) => {
       const value = event.target.value
    this.setState({task: value})
    console.log(event.target.value)
  }
  // handleChange(event) {
  //   const value = event.target.value
  //   this.setState({task: value})
  //   console.log(event.target.value)
  // }
  render() {
    return <div>
        <button onClick={this.handleClick} >Click me</button>
       <h1>i am clicked {this.state.count} times</h1>
       <input onChange={this.handleChange} type="text" placeholder="enter text" name="taskss" />
       <p>{this.state.task}</p>
    </div>
  }
} 
export default StateComponent;