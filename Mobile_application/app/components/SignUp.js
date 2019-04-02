import React from "react";
import { TouchableOpacity, TextInput, Image, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import API from '../api/connection';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      ipaddress: ''
    };
    this.jsonForm = '';
  }

  componentWillMount = () => AsyncStorage.getItem('Address').then((value) => this.setState({ ipaddress: value }))

  handleSignUp = () => {
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords don't match");
    } else {
      API.signup(this.state.username, this.state.email, this.state.password, this.state.ipaddress);
      alert("Account Created");
      this.props.navigation.navigate('SignIn');
    }
  }

  render() {
    return (
      <View >
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          placeholder='Username'
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder='Email'
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          placeholder='Password'
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={this.state.confirmPassword}
          placeholder='Confirm Password'
          onChangeText={(text) => this.setState({ confirmPassword: text })}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#DDDDDD', borderRadius: 50, margin: 40 }}
          onPress={() => this.props.navigation.navigate('SignIn')}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Already have an account?</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
  title: {
    fontFamily: 'sans-serif-light',
    fontSize: 40,
    textAlign: 'center',
    padding: 20,
  },
})