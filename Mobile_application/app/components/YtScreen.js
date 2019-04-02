import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class YtScreen extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50 }}> This is Youtube </Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../img/yt.png')}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.props.navigation.navigate('Drive')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/drive.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.props.navigation.navigate('Clock')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/clock.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.props.navigation.navigate('Steam')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/steam.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.props.navigation.navigate('Weather')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/weather.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 100, height: 100, margin: 20 }}
                        onPress={() => this.props.navigation.navigate('Gmail')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/gmail.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}