import axios from 'axios';

const headers = {
    'Content-Type': 'application/json'
}

export default {
    send: async function (api, username, burl) {
        try {
            console.log(burl + '/api/selectapi');
            await axios.post(burl + '/api/selectapi', {
                'username': username,
                'api': api
            }, {
                    headers: headers
                })
        } catch (error) {
            console.log(error);
        }
    },
    sendTwo: async function (api, username, burl) {
        try {
            console.log(burl + '/api/selectapiTwo');
            await axios.post(burl + '/api/selectapiTwo', {
                'username': username,
                'api': api
            }, {
                    headers: headers
                })
        } catch (error) {
            console.log(error);
        }
    },
    connectapi: async function (username, action, reaction, burl) {
        try {
            console.log(burl + '/api/connectapi');
            await axios.post(burl + '/api/connectapi', {
                'username': username,
                'action': action,
                'reaction': reaction

            }, {
                    headers: headers
                })
        } catch (error) {
            console.log(error);
        }
    },
    emailapiTwo: async function (email, username, burl) {
        try {
            console.log(burl + '/api/emailapiTwo');
            await axios.post(burl + '/api/emailapiTwo', {
                'username': username,
                'email': email

            }, {
                    headers: headers
                })
        } catch (error) {
            console.log(error);
        }
    },
    timeapiOne: async function (time, username, burl) {
        try {
            console.log(burl + '/api/timeapiOne');
            await axios.post(burl + '/api/timeapiOne', {
                'username': username,
                'time': time

            }, {
                    headers: { 'Content-Type': 'application/json' }
                })
        } catch (error) {
            console.log(error);
        }
    },
}
