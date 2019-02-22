import React, { Component } from 'react'

class User extends Component {
displayMessage() {
    alert('Hello');
    }    
  render() {
    return (
      <div className="mt-5">
        <div onClick={this.displayMessage} className="btn btn-primary">Click Here</div>
      </div>
    )
  }
}

export default User;