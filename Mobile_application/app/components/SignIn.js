import React, { Component } from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Image, Text, View, AsyncStorage } from 'react-native';
import GoogleLogin from './GoogleLogin'
import FacebookLogin from './FacebookLogin'
import API from '../api/connection'

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      ipaddress: '',
      token: ''
    };
  }

  componentWillMount = () => AsyncStorage.getItem('Address').then((value) => this.setState({ ipaddress: value }))


  handleSignIn = () => {
    API.login(this.state.username, this.state.password, this.state.ipaddress);
    AsyncStorage.getItem('token').then((value) => {
      if (value != null)
        this.props.navigation.navigate('Home');
      else
        alert("Account does not exist");
    })
  }

  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
      <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          placeholder='Username'
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          placeholder='Password'
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSignIn}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.gold}>Or</Text>
        <View style={{ alignItems: 'center' }} >
          <GoogleLogin />
          <View style={styles.thatOneLine} />
          <FacebookLogin />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#DDDDDD', borderRadius: 50, margin: 40 }}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontFamily: 'sans-serif-light',
    fontSize: 30,
  },
  gold: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif-light'
  },
  ipButton: {
    borderRadius: 100,
    width: 100,
    height: 50,
    width: 100,
    padding: 10,
    backgroundColor: '#DDDDDD',
  },
  input: {
    margin: 10,
    borderRadius: 50,
    fontSize: 20,
    height: 50,
    flexGrow: 1,
    borderWidth: 1.5,
    textAlign: 'center',
  },
  thatOneLine: {
    borderBottomWidth: 1,
    borderColor: '#999999',
    width: 200,
    margin: 5
  },
  title: {
    fontFamily: 'sans-serif-light',
    fontSize: 40,
    textAlign: 'center',
    padding: 20,
  },
})