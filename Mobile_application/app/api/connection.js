import axios from 'axios';
import { AsyncStorage } from 'react-native';

const headers = {
    'Content-Type': 'application/json'
}

export default {
    login: async function (username, password, burl) {
        try {
            console.log(burl + '/user/login');
            const data = await axios.post(burl + '/user/login', {
                'username': username,
                'password': password
            }, {
                    headers: headers
                })
            await AsyncStorage.setItem('token', data.data.token);
            console.log(data.data.token);
            await AsyncStorage.setItem('username', username);
            console.log(username);
        } catch (error) {
            await AsyncStorage.removeItem('token');
            console.log("Account does not exist");
        }
    },
    sociallogin: async function (res, type, burl) {
        let userData;
        if (type === 'facebook') {
            userData = {
                name: res.name,
                provider: type,
                email: res.email,
                id: res.id,
                token: res.accessToken,
                picture_url: res.picture.data.url
            };
        }
        if (type === 'google' && res.user.email) {
            userData = {
                name: res.user.name,
                provider: type,
                email: res.user.email,
                id: res.user.id,
                token: res.accessToken,
                picture_url: res.user.photo
            };
            await AsyncStorage.setItem('username', res.user.name);
            console.log(res.user.name);
        }
        console.log(userData)
        if (userData) {
            const data = await axios.post(burl + '/user/sociallogin', {
                'sociallogin': userData,
                resaux: type
            }, {
                    headers: headers
                })
            await AsyncStorage.setItem('token', data.data.token);
            console.log(data.data.token);
        }
    },
    signup: function (username, email, password, burl) {
        console.log(burl + '/user/signup');
        axios.post(burl + '/user/signup',
            {
                'username': username,
                'email': email,
                'password': password
            }, {
                headers: headers
            })
    }
}
