import React, { Component } from "react";
import './login.css'
import {NavLink} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <form  className='container bg-light rounded mt-2 p-2 '>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  <button className='btn btn-primary m-2 p-2'><NavLink to='/register' className='text-light '>Registeration</NavLink></button>
                <p className="forgot-password text-right">
                    
                    Forgot <a href="login">password?</a>
                </p>
            </form>
        );
    }
}