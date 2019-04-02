import axios from 'axios';
const burl = "http://localhost:8080"

const headers = {
    'Content-Type': 'application/json'
}

export default {
    send : function(api, username) {
        return axios.post(burl + '/api/selectapi',{
            'username' : username,
            'api' : api
        },{
            headers: headers
        })
    },
    getApiOne : function(username) {
        return axios.post(burl + '/api/wichapi',{
            'username' : username
        },{
            headers: headers
        })
    },
    sendTwo : function(api, username) {
        return axios.post(burl + '/api/selectapiTwo',{
            'username' : username,
            'api' : api
        },{
            headers: headers
        })
    },
    getApiTwo : function(username) {
        return axios.post(burl + '/api/wichapiTwo',{
            'username' : username
        },{
            headers: headers
        })
    },

    getCurrentapi : function(username) {
        console.log(username);
        return axios.post(burl + '/api/getCurrentapi',{
            'username' : username
        },{
            headers: headers
        })
    },

    connectapi : function(username, action, reaction){
        return axios.post(burl + '/api/connectapi',{
            'username' : username,
            'action' : action,
            'reaction' : reaction

        },{
            headers: headers
        })
    },
    emailapiTwo : function(email, username) {
        return axios.post(burl + '/api/emailapiTwo',{
            'username' : username,
            'email' : email

        },{
            headers : { 'Content-Type': 'application/json'}
        })
    },
    timeapiOne : function(time, username) {
        return axios.post(burl + '/api/timeapiOne',{
            'username' : username,
            'time' : time

        },{
            headers : { 'Content-Type': 'application/json'}
        })
    },
    erase : function(api, username) {
        console.log(api,username);
        return axios.post(burl + '/api/erase',{
            'username' : username,
            'api' : api

        },{
            headers : { 'Content-Type': 'application/json'}
        })
    }
}
