import React, { Component } from 'react';
import Form from '../../components/containers/form';
import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  async submitHandler() {
    let response
    try {
      response = await fetch('http://localhost:3001/user/login', {
          method: 'POST',
          body: JSON.stringify({...this.state}),
          headers: new Headers({
            "Content-type": "application/json"
          })
        })
        .then(response => response.json())
    }
    catch(e) {
      return this.props.logError(e)
    }

    try {
      fetch('http://localhost:3001/user/'+response, {
        method: "GET"
      })
      .then(response => response.json())
      .then(data => this.props.login(data))
    }
    catch(e) {
      return this.props.logError(e)
    }
  }

  changeHandler() {
    const handlers = {
      email: (data) => this.setState({email: data, password: this.state.password}),
      password: (data) => this.setState({password: data, email: this.state.email})
    }
    return handlers
  }

  render() {
    return (
      <section>
        <h3 className="greeting">Hello, {this.props.user.firstName}</h3>
        {
          !this.props.user.email ? 
          <section>
            <p className="error">{this.props.error}</p>
            <p>Please login :)</p>
            <Form 
            fields={["email", "password"]} 
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler()}
            />
          </section>
          : null
        }
      </section>
    );
  }
}

export default Home;