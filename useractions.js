React User Actions Code (Bloom)

import { userConstants } from '../constants';

import { UserService }   from '../services/storeService';

import { browserHistory }              from '../helpers/createHistory';


var userService = new UserService();

// action creators functions to be used
export const userActions = {
  logInOrSignUp,
  logout,
  getUserInfo,
  setUserInfo,
  // _removeUser
}


// actions
function authSuccess(credential) {
  return {
    type: userConstants.USER_AUTH_SUCCESS,
    user: credential
}}


function authFailure(error) {
  return {
    type: userConstants.USER_AUTH_FAILURE,
    errorMsg: error.message,
    errorCode: error.code
  }
}


function getUserProfile(user) {
  return {
    type: userConstants.GET_USER_PROFILE_SUCCESS,
    userId: user.uid,
    userLevel: user.level,
    userSkill: user.skill,
    userPromptNum: user.promptNum
  }
}


function getUserProfileError(error) {
  return {
    type: userConstants.GET_USER_PROFILE_ERROR,
    error
  }
}


function userSignOut() {
  return {
    type: userConstants.USER_SIGN_OUT
  }
}


// action creators (async)

function logInOrSignUp(username, password) {
  return async dispatch => {
    var response = await userService.logInOrSignUp(username, password);
    if (response.error) {
      return dispatch(authFailure(response.error));
    } else {
      return dispatch(authSuccess(response.user));
    }
  }
}


function logout() {
  return dispatch => {
    userService.signOut().then(() => { return dispatch(userSignOut()) })

  }
}


function getUserInfo() {
  return async dispatch => {

    var response = await userService.getProfile();
    if (response.uid) {
      return dispatch(getUserProfile(response))
    }
    return dispatch(getUserProfileError(response))
  }

}

// updates profile and returns the action from getUserInfo
function setUserInfo(updatedUserInfo) {
  return async dispatch => {

    await userService.updateProfile(updatedUserInfo)
    .then(() => { userService.getProfile() })
    .then((resp) => {
      if (resp.uid) {
        return dispatch(getUserProfile(resp));
      } else {
        return dispatch(getUserProfileError(resp));
      }
    });
  }
}
