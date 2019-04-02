import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Picker } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

export default class ClockScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            email: '',
            reaction: ''
        };
    }
    render() {
        var Reaction;
        if (this.state.reaction === 'googledrive') {
            Reaction = (
                <Collapse>
                    <CollapseHeader>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/drive.png')}
                        />
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Create a folder on Google Drive</Text>
                    </CollapseBody>
                </Collapse>
            );
        }
        else if (this.state.reaction === 'youtube') {
            Reaction = (
                <Collapse>
                    <CollapseHeader>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/yt.png')}
                        />
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Do something on YouTube</Text>
                    </CollapseBody>
                </Collapse>
            );
        }
        else if (this.state.reaction === 'steam') {
            Reaction = (
                <Collapse>
                    <CollapseHeader>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/steam.png')}
                        />
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Do something on Steam</Text>
                    </CollapseBody>
                </Collapse>
            );
        }
        else if (this.state.reaction === 'weather') {
            Reaction = (
                <Collapse>
                    <CollapseHeader>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/weather.png')}
                        />
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Do something when Celsius is changed</Text>
                    </CollapseBody>
                </Collapse>
            );
        }
        else if (this.state.reaction === 'gmail') {
            Reaction = (
                <Collapse>
                    <CollapseHeader>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/gmail.png')}
                        />
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Enter email to send to:</Text>
                        <TextInput
                            style={styles.collapsible}
                            value={this.state.email}
                            placeholder='email'
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </CollapseBody>
                </Collapse>
            );
        }
        return (
            <View>
                <Text style={styles.title}> Select Your Reaction </Text>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Collapse>
                        <CollapseHeader>
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={require('../img/clock.png')}
                            />
                        </CollapseHeader>
                        <CollapseBody style={{ flexDirection: 'column' }}>
                            <Text>Enter time for reaction to happen: </Text>
                            <TextInput
                                style={styles.collapsible}
                                value={this.state.time}
                                placeholder='hour'
                                onChangeText={(text) => this.setState({ time: text })}
                            />
                        </CollapseBody>
                    </Collapse>
                    {Reaction}
                </View>
                <View>
                    <Picker
                        selectedValue={this.state.reaction}
                        onValueChange={(value) => { this.setState({ reaction: value }); }}>
                        <Picker.Item label="Please select a reaction" value="nothing" />
                        <Picker.Item label="YouTube" value="youtube" />
                        <Picker.Item label="Google Drive" value="googledrive" />
                        <Picker.Item label="Steam" value="steam" />
                        <Picker.Item label="Weather" value="weather" />
                        <Picker.Item label="GMail" value="gmail" />
                    </Picker>
                    <TouchableOpacity
                        style={{ width: 200, height: 100, margin: 20 }}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ fontSize: 40 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'sans-serif-light',
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
    },
    collapsible: {
        borderRadius: 50,
        fontSize: 20,
        borderWidth: 1.5,
        textAlign: 'center',
    },
})