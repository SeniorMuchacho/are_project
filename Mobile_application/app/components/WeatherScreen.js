import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native/src';

export default class WeatherScreen extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35 }}> This is the Weather </Text>
                <Collapse style={{flexDirection:'column'}}>
                    <CollapseHeader>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/weather.png')}
                        />
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Display the weather</Text>
                    </CollapseBody>
                </Collapse>
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
                        onPress={() => this.props.navigation.navigate('Youtube')}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/yt.png')}
                        />
                    </TouchableOpacity>
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