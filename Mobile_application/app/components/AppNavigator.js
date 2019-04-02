import Authentication from './SignIn';
import Registration from './SignUp';
import FirstScreen from './FirstScreen';
import Homepage from './Homepage';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import DriveScreen from './DriveScreen';
import GmailScreen from './GmailScreen';
import SteamScreen from './SteamScreen';
import WeatherScreen from './WeatherScreen';
import ClockScreen from './ClockScreen';
import YtScreen from './YtScreen';



const AppNavigator = createStackNavigator({
    First: {
        screen: FirstScreen,
    },
    SignIn: {
        screen: Authentication,
    },
    SignUp: {
        screen: Registration,
    },
    Home: {
        screen: Homepage,
    },
    Drive: {
        screen: DriveScreen,
    },
    Weather: {
        screen: WeatherScreen,
    },
    Youtube: {
        screen: YtScreen,
    },
    Steam: {
        screen: SteamScreen,
    },
    Clock: {
        screen: ClockScreen,
    },
    Gmail: {
        screen: GmailScreen,
    },
}, {
        initialRouteName: 'First',
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;