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
      		submittedLogin: false,
      		submittedRegister: false
    	};
  	
  		this.handleLoginChange = this.handleLoginChange.bind(this);
  		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  		this.handleRegisterChange = this.handleRegisterChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
	}

	handleLoginChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleLoginSubmit(e) {
		e.preventDefault();

		this.setState({ submittedLogin: true });
        const { username, password } = this.state;
        // if (username && password) {
        //     this.props.login(username, password);
        // }
	}

	handleRegisterChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleRegisterSubmit(e) {
        e.preventDefault();

        this.setState({ submittedRegister: true });
        const { user } = this.state;
        // if (user.firstName && user.lastName && user.username && user.password) {
        //     this.props.register(user);
        // }
    }


	render() {
		// const { loggingIn } = this.props;
		const { registering  } = this.props;

  		const { username, password, submittedLogin, user, submittedRegister } = this.state;

  		return (
  			<div className="login-outer-container">
	  			<div className="login-form-container">
	  				<h2 className="login-title">Login</h2>
	  				<form name="login-form" onSubmit={this.handleLoginSubmit}>
	  					<div className={'form-group' + (submittedLogin && !username ? ' has-error' : '')}>
	  						<label>
		                        <input type="text" className="form-control" name="username" placeholder=" " value={username} onChange={this.handleLoginChange} required/>
		                        {submittedLogin && !username &&
		                            <div className="help-block">Username is required</div>
		                        }
		                        <span>Username</span>
		                    </label>
	                    </div>
	                    <div className={'form-group' + (submittedLogin && !password ? ' has-error' : '')}>
	                    	<label>                        
		                        <input type="password" className="form-control" name="password" placeholder=" " value={password} onChange={this.handleLoginChange} required/>
		                        {submittedLogin && !password &&
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

	  			<div className="register-form-container">
                	<h2 className="register-title">Create an account</h2>
                	<form name="login-form" onSubmit={this.handleRegisterSubmit}>
                    	<div className={'form-group' + (submittedRegister && !user.firstName ? ' has-error' : '')}>
                        	<label>
                        		<input type="text" className="form-control" name="firstName" placeholder=" " value={user.firstName} onChange={this.handleRegisterChange} required/>
                        		{submittedRegister && !user.firstName &&
                            		<div className="help-block">First Name is required</div>
                        		}
                        		<span>First Name</span>
                        	</label>
                    	</div>
                    	<div className={'form-group' + (submittedRegister && !user.lastName ? ' has-error' : '')}>
                        	<label>
                        		<input type="text" className="form-control" name="lastName" placeholder=" " value={user.lastName} onChange={this.handleRegisterChange} required/>
                        		{submittedRegister && !user.lastName &&
                            		<div className="help-block">Last Name is required</div>
                        		}
                        		<span>Last Name</span>
                        	</label>
                    	</div>
                    	<div className={'form-group' + (submittedRegister && !user.username ? ' has-error' : '')}>
                        	<label>
                        		<input type="text" className="form-control" name="username" placeholder=" " value={user.username} onChange={this.handleRegisterChange} required/>
                        		{submittedRegister && !user.username &&
                            		<div className="help-block">Username is required</div>
                        		}
                        		<span>Username</span>
                        	</label>
                    	</div>
                    	<div className={'form-group' + (submittedRegister && !user.password ? ' has-error' : '')}>
                        	<label>
                        		<input type="password" className="form-control" name="password" placeholder=" " value={user.password} onChange={this.handleRegisterChange} required/>
                        		{submittedRegister && !user.password &&
                            		<div className="help-block">Password is required</div>
                        		}
                        		<span>Password</span>
                        	</label>
                    	</div>
                    	<div className="form-group">
                        	<button className="login-btn">Register</button>                                         
                    	</div>
                	</form>
            	</div>
	  		</div>
  		);
	}
}

export default Login