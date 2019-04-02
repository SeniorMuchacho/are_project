import axios from 'axios';
const burl = "http://localhost:8080"

const headers = {
    'Content-Type': 'application/json'
}
export default {
    login : function(password, username) {
        return axios.post(burl + '/user/login',{
            'username' : username,
            'password' : password

        },{
            headers: headers
        })
    },

    sociallogin: async function (res, type) {
        let userData;
        if (type === 'facebook' && res.email) {
            userData = {
                name: res.name,
                provider: type,
                email: res.email,
                id: res.id,
                token: res.accessToken,
                picture_url: res.picture.data.url
            };
        }
        if (type === 'google' && res.w3.U3) {
            userData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                id: res.El,
                token: res.Zi.access_token,
                picture_url: res.w3.Paa
            };
        }
        if (type === 'github') {
            console.log(res)
        }
        if (userData) {
            const data = await axios.post(burl + '/user/sociallogin', {
                'sociallogin': userData,
                resaux : type
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await localStorage.setItem('token', data.data.token);
            window.location = "/area" + userData.name;
        }
    },

    signup : function(send){
        return axios.post(burl + '/user/signup',send,{headers: headers})
    },

    isAuth : function() {
        return (localStorage.getItem('token') !== null);  
    },

    isname : function() {
        return (localStorage.getItem('id') !== null);  
    },

    whoiam : function() { 
        return (localStorage.getItem('id'));
    },

    logout : function() {
        localStorage.clear();
    }
}
