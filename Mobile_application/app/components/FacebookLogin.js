import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { withNavigation } from 'react-navigation';

class FacebookLogin extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    navigation.navigate('Home', { jsonForm: data.accessToken.toString });
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")} />
      </View>
    );
  }
}

export default withNavigation(FacebookLogin);