import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import API from '../api/connection';

class Google extends Component {
  render() {
    const responseGoogle = (response) => {
      API.sociallogin(response, 'google');
    }
    return (
      <div>
        <GoogleLogin
          clientId="410066864000-h1inmcjimoeu4prbdvphqpga290k779r.apps.googleusercontent.com"
          buttonText="Login with Google"
          scope="https://www.googleapis.com/auth/drive profile email https://mail.google.com/ https://www.googleapis.com/auth/youtube"
          onSuccess={responseGoogle}
          onFailure={responseGoogle} />
      </div>
    );
  }
}
export default Google;