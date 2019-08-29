import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';


class Login extends React.Component {
	constructor(props) {
    	super(props);
    	
    	this.state = {
    		user: {
    			first_name: '',
                last_name: '',
                username: '',
                password: ''
    		},
      		username: '',
      		password: '',
      		submitted: false
    	};
  	
  		this.handleLoginChange = this.handleLoginChange.bind(this);
  		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	}

	handleLoginChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleLoginSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
        const { username, password } = this.state;
        // if (username && password) {
        //     this.props.login(username, password);
        // }
	}

	render() {
		// const { loggingIn } = this.props;
  		const { username, password, submitted } = this.state;

  		return (
  			<div className="login-form-container">
  				<h2 className="login-title">Login</h2>
  				<form name="login-form" onSubmit={this.handleLoginSubmit}>
  					<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
  						<label>
	                        <input type="text" className="form-control" name="username" placeholder=" " value={username} onChange={this.handleLoginChange} required/>
	                        {submitted && !username &&
	                            <div className="help-block">Username is required</div>
	                        }
	                        <span>Username</span>
	                    </label>
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    	<label>                        
	                        <input type="password" className="form-control" name="password" placeholder=" " value={password} onChange={this.handleLoginChange} required/>
	                        {submitted && !password &&
	                            <div className="help-block">Password is required</div>
	                        }
	                        <span>Password</span>
	                    </label>
                    </div>
                    <div className="form-group">
                        <button className="login-btn">Login</button>          
                    </div>
  				</form>
  			</div>
  		);
	}
}

export default Login