import React from 'react';
import API from '../api/connection';
import APIS from '../api/selectapi';
import "./cssComponents/area.css";
import facebookpng from "./../pictures/facebook.png";
import clockpng from "./../pictures/clock.png";
import youtubepng from "./../pictures/youtube.png";
import googledrivepng from "./../pictures/googledrive.png";
import weatherpng from "./../pictures/weather.png";
import steampng from "./../pictures/steam.png";
import Gmailpng from "./../pictures/gmail.png";
import FacebookLog from "./FacebookLogin";
import GoogleLog from "./GoogleLogin";

class Area extends React.Component {
    constructor(props){
        super(props);
        if (API.isAuth() === false) {
            window.location = "/login"
          }
        if (API.isname() === false) {
            localStorage.setItem('id', this.props.params.id);
        }
        this.state = {
            id : API.whoiam()
        };
    }
    render() {
        return(
            <div>
                <h2>AREA</h2>
                <h2><span>Selectionne 2 API</span></h2>
                <div class="box">
                    <div class="container">
                        <div class="row">
                        <Facebook/>
                        <Clock/>
                        <Youtube/>
                        <Googledrive/>
                        <Gmail/>
                        <Steam/>
                        <Meteo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Facebook extends React.Component {
    select = event => {
        APIS.send("facebook", API.whoiam());
        window.location = '/apiboard'
        return;
      }
    render() {
    return(
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>  
        <div class="box-part text-center">
        <img class="img-fluid width: 100% \9" src={facebookpng} alt="Facebook"/> 
            <div class="title">
                <h4>Facebook</h4>
            </div>
            <div>
                <FacebookLog/>
            </div>
         </div>
    </div>
    )
}
}

class Clock extends React.Component {
    select = event => {
        APIS.send("clock", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={clockpng} alt="GitHub"/>
        
            <div className="title">
                <h4>Clock</h4>
            </div>
         </div>
    </div>
    )}
}


class Youtube extends React.Component {
    select = event => {
        APIS.send("youtube", API.whoiam());
        window.location = '/apiboard'
        return;
      }
    render() {
    return(
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
        <div class="box-part text-center">
        <img class="img-fluid width: 100% \9" src={youtubepng} alt="youtube"/>
            <div class="title">
                <h4>Youtube</h4>
            </div>
            <div>
                <GoogleLog/>
            </div>
         </div>
    </div>
    )}
}

class Googledrive extends React.Component {
    select = event => {
        APIS.send("googledrive", API.whoiam());
        window.location = '/apiboard'
        return;
      }
    render() {
    return(
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
        <div class="box-part text-center">
        <img class="img-fluid width: 100% \9" src={googledrivepng} alt="Google Drive"/>
            <div class="title">
                <h4>Googledrive</h4>
            </div>
            <div>
                <GoogleLog/>
            </div>
         </div>
    </div>
    )}
}

class Gmail extends React.Component {
    select = event => {
        APIS.send("gmail", API.whoiam());
        window.location = '/apiboard'
        return;
      }
    render() {
    return(
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
        <div class="box-part text-center">
        <img class="img-fluid width: 100% \9" src={Gmailpng} alt="Gmail"/>
            <div class="title">
                <h4>GMail</h4>
            </div>
            <div>
                <GoogleLog/>
            </div>
         </div>
    </div>
    )}
}

class Meteo extends React.Component {
    select = event => {
        APIS.send("weather", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={weatherpng} alt="Trello"/>
            
            <div className="title">
                <h4>Weather Méteo</h4>
            </div>
         </div>
    </div>
    )}
}

class Steam extends React.Component {
    select = event => {
        APIS.send("steam", API.whoiam());
        window.location = '/apiboard'
        return;
      }
    render() {
    return(
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>     
        <div class="box-part text-center">     
        <img class="img-fluid width: 100% \9" src={steampng} alt="Steam"/>  
            <div class="title">
                <h4>Steam</h4>
            </div>
         </div>
    </div>
    )}
}



export default Area;