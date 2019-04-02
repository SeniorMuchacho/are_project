import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, AsyncStorage, Image } from 'react-native';

export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ipaddress: ''
        };
    }

    setServerAddress = () => {
        AsyncStorage.setItem('Address', this.state.ipaddress);
        alert('Address changed !');
    }

    navigateSignIn = () => {
        if (this.state.ipaddress)
            this.props.navigation.navigate('SignIn');
        else
            alert("Set Server Address First");
    }

    navigateSignUp = () => {
        if (this.state.ipaddress)
            this.props.navigation.navigate('SignUp')
        else
            alert("Set Server Address First");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Area</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.navigateSignIn}>
                    <Text style={styles.buttonText} >Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.navigateSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }}>
                    <TextInput
                        style={styles.input}
                        placeholder='Server Address'
                        onChangeText={(text) => this.setState({ ipaddress: text })}
                    />
                    <TouchableOpacity
                        style={styles.ipButton}
                        onPress={() => this.setServerAddress()}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Set</Text>
                    </TouchableOpacity>
                </View>
            </View >
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
        justifyContent: 'center',
        paddingBottom: 100
    },
    input: {
        borderRadius: 50,
        fontSize: 20,
        height: 50,
        flexGrow: 1,
        marginRight: 10,
        borderWidth: 1.5,
        textAlign: 'center',
    },
    ipButton: {
        borderRadius: 100,
        width: 100,
        height: 50,
        width: 100,
        padding: 10,
        backgroundColor: '#DDDDDD',
    },
    title: {
        fontFamily: 'sans-serif-light',
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
    },
})