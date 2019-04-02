import React from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { View, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import API from '../api/connection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
      ipaddress: ''
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('Address').then((value) => this.setState({ ipaddress: value }))
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive profile email https://mail.google.com/'],
      webClientId:
        '477195592887-9k8jtqdos6nac44qrbg1nic613ppdest.apps.googleusercontent.com',
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo });
      API.sociallogin(userInfo, 'google', this.state.ipaddress);
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign In Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('In Progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available');
      } else {
        console.log('Error');
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn} />
      </View>
    );
  }
}

export default withNavigation(App)