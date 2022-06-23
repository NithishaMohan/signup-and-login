import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Employee ID</label>
          <input
            type="EmployeeId"
            className="form-control"
            placeholder="EmployeeID"
          />
        </div>
        <div className="mb-3">
          <label>Mobile No</label>
          <input
            type="Mobile No"
            className="form-control"
            placeholder="Mobile No"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}