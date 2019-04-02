import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import SelectAPI from '../api/selectapi';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            api: '',
            ipaddress: ''
        };
    }
    componentWillMount() {
        AsyncStorage.getItem('Address').then((value) => this.setState({ ipaddress: value }))
        AsyncStorage.getItem('username').then((value) => this.setState({ username: value }))
    }
    getAPIOne = (api) => {
        switch (api) {
            case 'Clock':
                this.setState({ api: 'clock' });
                console.log('API One: Clock');
                break;
            case 'Youtube':
                this.setState({ api: 'youtube' });
                console.log('API One: YouTube');
                break;
            case 'Steam':
                this.setState({ api: 'steam' });
                console.log('API One: Steam');
                break;
            case 'Weather':
                this.setState({ api: 'weather' });
                console.log('API One: Weather');
                break;
            case 'Gmail':
                this.setState({ api: 'gmail' });
                console.log('API One: GMail');
                break;
            case 'Drive':
                this.setState({ api: 'googledrive' });
                console.log('API One: Google Drive');
                break;
            default:
                console.log('Error: No API One');
                break;
        }
        this.props.navigation.navigate(api);
        SelectAPI.send(this.state.api, this.state.username, this.state.ipaddress);
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>Select your Action</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.getAPIOne('Clock')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/clock.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.getAPIOne('Youtube')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/yt.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.getAPIOne('Steam')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/steam.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.getAPIOne('Weather')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/weather.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.getAPIOne('Gmail')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/gmail.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.getAPIOne('Drive')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/drive.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'sans-serif-light',
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
    },
})