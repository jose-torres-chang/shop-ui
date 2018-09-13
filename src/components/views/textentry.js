import React, { Component } from 'react';

class TextEntry extends Component {
  constructor(props) {
    super(props)

    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.props.changeHandler(e.target.value)
  }

  shouldComponentUpdate(props) {
    return this.props !== props
  }

  render() {
    return(
      <div className="form-group">
        <label labelfor={this.props.label}>
          {this.props.label.charAt(0).toUpperCase() + this.props.label.slice(1)}:&nbsp;
        </label>
        <input 
        type={this.props.label}
        onChange={this.changeHandler}
        className="form-control"
        />
      </div>
    )
  }
}

export default TextEntry