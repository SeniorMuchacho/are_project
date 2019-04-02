const nodemailer = require("nodemailer");
var {google} = require('googleapis');
const {googleAuth} = require('google-auth-library');
const axios = require('axios');
const reaction = require('./reactionapi');
const User = require('../../model/ModelUser.js');

var last_mail;
var last_file;
var last_temp;
var last_name;
var last_count;
var last_video;

async function functiongoogledrive(apiOne, apiTwo, google, username){
        const { data } = await axios.get('https://www.googleapis.com/drive/v3/files', {
            headers: {
                Authorization: `Bearer ${google.token}`
                }
        })
        last_file = data.files[0].id;
        User.findOne({ username: username}, function (err, actualuser) {
            let i = 0;
            while(actualuser.inter[i].nameApi != apiOne.name) {
              i++;
            }
            if(actualuser.inter[i].status == true) {
                intervalle = setInterval(() => loop_drive(apiOne, apiTwo, google, intervalle, username), 5000);
            }
        });
}


async function loop_drive(apiOne, apiTwo, google, inter, username){
    const { data } = await axios.get('https://www.googleapis.com/drive/v3/files', {
        headers: {
            Authorization: `Bearer ${google.token}`
        }
    })
        var check = data.files[0].id;
        if (check != last_file) {
            await reaction.do_reaction(apiTwo, google);
            await clearInterval(inter);
            return (functiongoogledrive(apiOne,apiTwo, google, username));
        }
        else {
            console.log("nothing on drive");
        }
}

async function functiongmail(apiOne, apiTwo, google, username) {
        const { data } = await axios.get( "https://www.googleapis.com/gmail/v1/users/" + google.id + "/messages", {
            headers: {
                Authorization: `Bearer ${google.token}`
            }
        })
        last_mail = data.messages[0].id;
        console.log("ici",username);
        User.findOne({ username: username}, function (err, actualuser) {
            let i = 0;
            while(actualuser.inter[i].nameApi != apiOne.name) {
                console.log(actualuser.inter[i].nameApi);
                i++;
            }
            if(actualuser.inter[i].status == true) {
                intervalle = setInterval(() => loop_gmail(apiOne,apiTwo, google, intervalle, username), 5000);
            }
        });
}

async function loop_gmail(apiOne, apiTwo, google, inter, username){
    const { data } = await axios.get( "https://www.googleapis.com/gmail/v1/users/" + google.id + "/messages", {
            headers: {
                Authorization: `Bearer ${google.token}`
            }
        })
        if (apiTwo.name == 'gmail')
            var check = data.messages[1].id;
        else 
            var check = data.messages[0].id;
        if (check != last_mail) {
            await reaction.do_reaction(apiTwo, google);
            await clearInterval(inter);
            return (functiongmail(apiOne, apiTwo, google, username));
        }
        else {
            console.log("nothing on gmail");
        }
}

async function functionclock(apiOne, apiTwo, google, username) {
    console.log("timer :", apiOne.complement);
    const inter = setInterval(() => loop_clock(apiOne, apiTwo, google, inter, username), 60000);
}

async function loop_clock(apiOne, apiTwo, google, username){
    const { data } = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Paris");
    var d = new Date(data.datetime);
    const hours = d.getHours();
    const Min = d.getMinutes();
    console.log(hours, parseInt(apiOne.complement));
    if (apiOne.complement != "") {
        if ( Min == 0 && parseInt(apiOne.complement) == hours) {
            await reaction.do_reaction(apiTwo, google, username);
        }
    } else { 
        if ( Min == 0 && hours == 0) {
            await reaction.do_reaction(apiOne, apiTwo, google);
        }
    }
}

async function functionweather(apiOne, apiTwo, google, username) {
    const id = "6455259";
    const { data } = await axios.get( "http://api.openweathermap.org/data/2.5/weather?id="+id+"&units=metric&APPID=eb4e00bbbf1dd9e585cb9d6cc98d6e50");
    last_temp = data.main.temp;
    User.findOne({ username: username}, function (err, actualuser) {
        let i = 0;
        while(actualuser.inter[i].nameApi != apiOne.name) {
          i++;
        }
        if(actualuser.inter[i].status == true) {
            const intervalle = setInterval(() => loop_weather(apiOne, apiTwo, google, intervalle, username), 5000);
        }
    });
}

async function loop_weather(apiOne, apiTwo, google, inter, usernmae){
    const id = "6455259";
    const { data } = await axios.get( "http://api.openweathermap.org/data/2.5/weather?id="+id+"&units=metric&APPID=eb4e00bbbf1dd9e585cb9d6cc98d6e50");
    var check = data.main.temp;
    console.log(check, last_temp);
    if (check != last_temp) {
        await reaction.do_reaction(apiTwo, google);
        await clearInterval(inter);
        return (functionweather(apiOne, apiTwo, google, username));
    }
    else {
        console.log("nothing on weather");
    }
}

async function functionsteam(apiOne, apiTwo, google, username) {
    const id = "76561198162841929";
    const { data } = await axios.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=36F6FDFFDA4388AC3B79433231C5B2A6&steamids="+id);
    console.log("1.1 : " + data.response.players[0].personaname);
    last_name = data.response.players[0].personaname;
    User.findOne({ username: username}, function (err, actualuser) {
        let i = 0;
        while(actualuser.inter[i].nameApi != apiOne.name) {
          i++;
        }
        if (actualuser.inter[i].status == true) {
            const intervalle = setInterval(() => loop_steam(apiOne, apiTwo, google, intervalle, username), 5000);
        }
    });
}

async function loop_steam(apiOne, apiTwo, google, inter, username){
    const id = "76561198162841929";
    const { data } = await axios.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=36F6FDFFDA4388AC3B79433231C5B2A6&steamids="+id);
    console.log("2.1 : " + data.response.players[0].personaname);
    var check = data.response.players[0].personaname;
    console.log(check, last_name);
    if (check != last_name) {
        await reaction.do_reaction(apiTwo, google);
        await clearInterval(inter);
        return (functionsteam(apiOne, apiTwo, google, username));
    }
    else {
        console.log("nothing on steam");
    }
}

async function functionyoutube(apiOne, apiTwo, google, username) {
    const { data } = await axios.get( "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCzhIpixfMmSqFz4VGZjgJOA", {
        headers: {
            Authorization: `Bearer ${google.token}`
        }
    })
    console.log("1.1 : " + data.items[0].statistics.subscriberCount);
    last_count = data.items[0].statistics.subscriberCount;
    User.findOne({ username: username}, function (err, actualuser) {
        let i = 0;
        while(actualuser.inter[i].nameApi != apiOne.name) {
          i++;
        }
        if(actualuser.inter[i].status == true) {
            const intervalle = setInterval(() => loop_youtube(apiOne, apiTwo, google, intervalle, username), 5000);
        }
    });
}

async function loop_youtube(apiOne, apiTwo, google, inter, username){
    const { data } = await axios.get( "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCzhIpixfMmSqFz4VGZjgJOA", {
            headers: {
                Authorization: `Bearer ${google.token}`
            }
        })
    console.log("2.1 : " + data.items[0].statistics.subscriberCount);
    var check = data.items[0].statistics.subscriberCount;
    console.log(check, last_count);
    if (check != last_count) {
        await reaction.do_reaction(apiTwo, google);
        await clearInterval(inter);
        return (functionsteam(apiOne, apiTwo, google, username));
    }
    else {
        console.log("nothing on youtube");
    }
}


exports.functionweather = functionweather;
exports.functionyoutube = functionyoutube;
exports.functionsteam = functionsteam;
exports.functiongmail = functiongmail;
exports.functiongoogledrive = functiongoogledrive;
exports.functionclock = functionclock;