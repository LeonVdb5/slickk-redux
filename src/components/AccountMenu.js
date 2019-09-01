import React, { Component } from 'react';
import userIcon from '../images/user.png';
import './Nav.css';

class AccountMenu extends Component {
  
  render() {

    let { handleSignout } = this.props;

    return (
      <div className="dropdown-account">
        <button>
          <img className="account-icon" src={userIcon} alt="user-icon"/>
        </button>
        <div className="dropdown-account-content">
          <button>MY PROFILE</button>
          <button>USER SETTINGS</button>
          <button className="nav-account" onClick={() => handleSignout()}>LOGOUT</button>
        </div>
      </div>
    );
  }
}

export default AccountMenu