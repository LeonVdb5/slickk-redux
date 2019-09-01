import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';

//Auth actions 
import * as actions from '../actions/auth';

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

class Login extends React.Component {
	constructor(props) {
    	super(props);
    	
    	this.state = {
    		user: {
    			email: '',
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

	async handleLoginSubmit(e) {
		e.preventDefault();
		this.setState({ submittedLogin: true });
        const { username, password } = this.state;
        await this.props.login({username, password});
        if (!this.props.errorMessage){
            this.props.history.push('/');
        }
        else {
            alert(this.props.errorMessage);
        }
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

    async handleRegisterSubmit(e) {
        e.preventDefault();
        this.setState({ submittedRegister: true });
        const { user } = this.state;
        await this.props.register(user); 
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        } else {
            alert(this.props.errorMessage);
        }
    }

	render() {
		// const { loggingIn } = this.props;
		const { registering } = this.props;

  		const { username, password, submittedLogin, user, submittedRegister } = this.state;

  		return (
  			<div className="login-outer-container">
	  			<div className="login-form-container">
	  				<h2 className="login-title">Login</h2>
	  				<form name="login-form" onSubmit={this.handleLoginSubmit}>
	  					<div className={'form-group' + (submittedLogin && !username ? ' has-error' : '')}>
	  						<label>
		                        <input type="text" className="form-control" name="username" placeholder=" " value={username} onChange={this.handleLoginChange} autocomplete="username" required/>
		                        {submittedLogin && !username &&
		                            <div className="help-block">Username is required</div>
		                        }
		                        <span>Username</span>
		                    </label>
	                    </div>
	                    <div className={'form-group' + (submittedLogin && !password ? ' has-error' : '')}>
	                    	<label>                        
		                        <input type="password" className="form-control" name="password" placeholder=" " value={password} onChange={this.handleLoginChange} autocomplete="current-password" required/>
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
                        <div className={'form-group' + (submittedRegister && !user.username ? ' has-error' : '')}>
                            <label>
                                <input type="text" className="form-control" name="email" placeholder=" " value={user.email} onChange={this.handleRegisterChange} autocomplete="off" required/>
                                {submittedRegister && !user.username &&
                                    <div className="help-block">Email is required</div>
                                }
                                <span>Email</span>
                            </label>
                        </div>
                    	<div className={'form-group' + (submittedRegister && !user.username ? ' has-error' : '')}>
                        	<label>
                        		<input type="text" className="form-control" name="username" placeholder=" " value={user.username} onChange={this.handleRegisterChange} autocomplete="off" required/>
                        		{submittedRegister && !user.username &&
                            		<div className="help-block">Username is required</div>
                        		}
                        		<span>Username</span>
                        	</label>
                    	</div>
                    	<div className={'form-group' + (submittedRegister && !user.password ? ' has-error' : '')}>
                        	<label>
                        		<input type="password" className="form-control" name="password" placeholder=" " value={user.password} onChange={this.handleRegisterChange} autocomplete="new-password" required/>
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

export default connect(mapStateToProps, actions)(Login)

