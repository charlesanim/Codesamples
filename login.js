React Login Code

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

import BloomButton     from '../BloomButton/BloomButton';

import GlobeWithLogo    from '../../assets/logos/GlobeWithLogo.png';

import './LoginPage.css';


class LoginPage extends Component {
  constructor(props) {
      super(props);

      this.state = {
          userEmail: '',
          userPword: '',
          submitted: false
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormUpdate = this.handleFormUpdate.bind(this);
      this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.props.userAuth.authentication.loggedIn) {
      const { match } = this.props;
      this.props.history.push(`/lessons/${match.params.level}/${match.params.skill}/${match.params.prompt}`);
    }
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { userEmail, userPword } = this.state;

      if (userEmail && userPword) {
          this.props.logInOrSignUp(userEmail, userPword);
      }
  }

  handleFormUpdate = (inputField) => (event) => {
    this.setState({ [inputField]: event.target.value })
  }

  focusTextInput(e) {
    if (e.keyCode == 9) {
      this.textInput.current.focus();
    }
  }

  render() {

    const { userAuth } = this.props;
    const { authentication } = userAuth;
    const { userEmail, userPword, submitted } = this.state;

    return (
      <div className="login-page">
        <form className="login-form">
            <div id='globe-logo-div'><img src={GlobeWithLogo}/></div>
            <div id='sign-in-text-box' >ᎣᏏᏲ, ᏙᎯᏧ? Welcome to BLOOM, a computer game
              where you can learn Cherokee from anywhere in the world!
            </div>
            <div id='sign-in-instrux-box'>
              Type your email and create a password to begin your learning adventure.
            </div>


            { authentication && !authentication.loggedIn && authentication.errorMsg &&
              <div className="help-block"> { authentication.errorMsg } </div>
            }

            <div className={"form-inline" + (submitted && !userEmail ? " has-error" : "")}>
              <input className="email-input" name="userEmail" type="text"
                placeholder="email" value={userEmail}
                onChange={this.handleFormUpdate('userEmail')}
                ref={this.textInput} />
              <input className="pword-input" name="userPword" type="password"
                placeholder="password" value={userPword}
                onChange={this.handleFormUpdate('userPword')}
                onClick={this.focusTextInput} />
            </div>

            {submitted && !userEmail &&
                <div className="help-block email">Email address is required</div>
            }
            { submitted && !userPword &&
                <div className="help-block pword">Password is required</div>
            }

            <BloomButton label="begin" onClick={this.handleSubmit} buttonType='login' />

        </form>
    </div>
    )
  }
}

function mapStateToProps(state) {

    const userAuth = state;
    return {
        userAuth
    };
}

function mapDispatchToProps(dispatch) {
  return ({
    logInOrSignUp: (email, password) => {dispatch(userActions.logInOrSignUp(email, password))}
  })
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
