import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import API from '../api/connection';

class Facebook extends Component {
  render() {
    const responseFacebook = (response) => {
        console.log("facebook console");
        console.log(response);
        API.sociallogin(response, 'facebook');
    }
    return (
      <div>
        <FacebookLogin
          appId="267736804138451"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook} />
      </div>
    );
  }
}

export default Facebook;