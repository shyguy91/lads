import React, { Component } from 'react';


class LoginForm extends Component {


    render() {
        return (
            <div className="loginForm">
                <h1 className="head-login">Login</h1>
                <form className="form-login">
                    <div className="form-group">
                        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                        <input type="text" className="form-control" id="email" placeholder="E-Mail Address" />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="btn-submit-div">
                    <button type="button" className="btn btn-info btn-submit">SUBMIT</button>
                    </div>
                    <div className="otherConnections">
                    <p>or connect with</p>
                    <div>
                    <i className="fa fa-linkedin-square fa-2x icons" aria-hidden="true"></i>
                    <i className="fa fa-facebook-square fa-2x icons" aria-hidden="true"></i>
                    <i className="fa fa-google-plus-square fa-2x icons" aria-hidden="true"></i>
                    <i className="fa fa-github-square fa-2x icons" aria-hidden="true"></i>
                    </div>
                    <p className="version">Version: 1.06.03</p>
                    </div>
                </form>
            </div>
        )
    }
}



export default LoginForm;
