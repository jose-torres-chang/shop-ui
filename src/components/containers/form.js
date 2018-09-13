import React, { Component } from 'react';
import TextEntry from '../views/textentry';
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }
  
  submitHandler(e) {
    e.preventDefault()
    this.props.submitHandler()
  }

  render() {
    return(
      <form 
      onSubmit={this.submitHandler} 
      className="card container"
      >      
        <h3>Sign in</h3>
        {this.props.fields && this.props.fields.map(field => 
          <TextEntry 
          key= {field}
          label= {field}
          changeHandler= {this.props.changeHandler[field]}
          />
        )}
      <input type="submit" className="btn btn-dark"/>
      </form>
    )
  }
}

export default Form