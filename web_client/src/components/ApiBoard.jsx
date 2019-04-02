import React from 'react';
import { Button } from "react-bootstrap";
import API from '../api/connection';
import APIS from '../api/selectapi';
import facebookpng from "./../pictures/facebook.png";
import clockpng from "./../pictures/clock.png";
import youtubepng from "./../pictures/youtube.png";
import googledrivepng from "./../pictures/googledrive.png";
import Gmailpng from "./../pictures/gmail.png";
import weatherpng from "./../pictures/weather.png";
import steampng from "./../pictures/steam.png";
import Collapsible from 'react-collapsible';

class ApiBoard extends React.Component {
    constructor(props) {
        super(props);
       if (API.isAuth() === false) {
            window.location = "/login"
        }
        this.state = {
            id : API.whoiam()
        };
    }
    handleConnect = event => {
        APIS.connectapi(API.whoiam());
      }

    render() {
        return(
            <div className="Dashboard">
                <h2>API BOARD</h2>
                <Button
                onClick={this.handleConnect}
                block bsSize="large" type="submit">
                CONNECT API
                </Button>
                <div className="row to-the-left">
                    <div className="col">
                    <ApiOne/>
                    </div>
                    <div className="col">
                    <ApiTwo/>
                    </div>
                </div>
            <div className="container">
     	        <div className="row">
                    <Facebook/>
                    <Clock/>
                    <Youtube/>
                    <Googledrive/>
                    <Gmail/>
                    <Meteo/>
                    <Steam/>
		        </div>
            </div>
        </div>
        )
    }
}

class ApiTwo extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                apiTwo : "",
                imageTwo : "",
                reaction : 0,
                emailapiTwo : ""
            };
            this.get_element();
        }
        get_element() {
            APIS.getApiTwo(API.whoiam()).then(function(response) {
                this.setState({ apiTwo: response.data.apiTwo});
                this.setState({ imageTwo: require("./../pictures/"+response.data.apiTwo+".png")});
            }.bind(this));
        }

        selectReaction() {
            if (this.state.apiTwo === "facebook")
            return (
            <ul>
                <li onClick={() => this.setReaction(0)}> - nothing</li>
            </ul>);
            if (this.state.apiTwo === "clock")
            return (
            <ul>
                <li onClick={() => this.setReaction(0)}> - nothing</li>
            </ul>);
            if (this.state.apiTwo === "weather")
            return (
            <ul>
                <li onClick={() => this.setReaction(0)}> - Nothing</li>
            </ul>);
            if (this.state.apiTwo === "gmail")
            return (
            <ul>
                <li onClick={() => this.setReaction(0)}>Send a message for each modification from the first api chosen</li>
                <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" onClick={() => this.sendselectemail(this.state.emailapiTwo)}>click</span>
                </div>
                <input type="text" className="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="addon-wrapping" id="emailapiTwo" onChange={this.handleChange}/>
                </div>
            </ul>);
            if (this.state.apiTwo === "googledrive")
            return (
            <ul>
                <li onClick={() => this.setReaction(0)}>Create a folder in your drive</li>
            </ul>);
            if (this.state.apiTwo === "youtube")
            return (
            <ul>
                <li onClick={() => this.setReaction(0)}> - Nothing</li>
            </ul>);
        }

        handleChange = event => {
            this.setState({
              [event.target.id]: event.target.value
            });
          }
        
        sendselectemail(email)
        {
            console.log(email);
            APIS.emailapiTwo(email, API.whoiam());
        }
    
        setReaction = name => {
            this.setState({ reaction: name});
        }
        render() {
            return(
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>  
                    <img className="img-fluid width: 100% \9" src= {this.state.imageTwo} alt="Second API"/> 
                        <h4>Deuxieme API selectionnée est {this.state.apiTwo}</h4>
                    <Collapsible trigger="REACTION">
                        <div id="example-collapse-text">
                            {this.selectReaction()};
                        </div>
                    </Collapsible>
                </div>
            )} 
}

class ApiOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiOne : "",
            imageOne : "",
            action : 0,
            timeapiOne : "",
            idmeteoapiOne : ""
        };
        this.get_element();
    }

    get_element() {
        APIS.getApiOne(API.whoiam()).then(function(response) {
            this.setState({ apiOne: response.data.apiOne});
            this.setState({ imageOne: require("./../pictures/"+response.data.apiOne+".png")});
        }.bind(this));
    }

    selectAction() {
        if (this.state.apiOne === "facebook")
        return (
        <ul>
            -nothing
        </ul>)
        if (this.state.apiOne === "clock")
        return (
        <ul>
            <li onClick={() => this.setAction(0)}>-Do a reaction at a specified time</li>
            <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" onClick={() => this.sendselectetime(this.state.timeapiOne)}>click</span>
                </div>
                <input type="text" className="form-control" placeholder="Hour (Ex : 12)" aria-label="Username" aria-describedby="addon-wrapping" id="timeapiOne" onChange={this.handleChange}/>
                </div>
        </ul>);
        if (this.state.apiOne === "weather")
        return (
        <ul>
            <li onClick={() => this.setAction(0)}>A new temperature is detected</li>
            <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" onClick={()=>console.log("lol")}>click</span>
                </div>
                <input type="text" className="form-control" placeholder="Country ID" aria-label="Username" aria-describedby="addon-wrapping" id="idmeteoapiOne" onChange={this.handleChange}/>
                </div>
        </ul>);
        if (this.state.apiOne === "gmail")
        return (
        <ul>
            <li onClick={() => this.setAction(0)}>Receipt of a message from a user X</li>           
        </ul>);
        if (this.state.apiOne === "googledrive")
        return (
        <ul>
            <li onClick={() => this.setAction(0)}>A new folder is created in your drive </li>
        </ul>);
        if (this.state.apiOne === "youtube")
        return (
        <ul>
            <li onClick={() => this.setAction(0)}>A new event is created in Calendar C</li>
        </ul>);
        if (this.state.apiOne === "steam")
        return (
        <ul>
            <li onClick={() => this.setAction(0)}>personanamme has changed</li>
            <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" onClick={()=>console.log("lol")}>click</span>
                </div>
                <input type="text" className="form-control" placeholder="Steam id" aria-label="Username" aria-describedby="addon-wrapping" id="idmeteoapiOne" onChange={this.handleChange}/>
            </div>
        </ul>);
    }

    handleChange = event => {
        console.log(this.state);
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
    sendselectetime(time)
    {
        APIS.timeapiOne(time, API.whoiam());
    }

    setAction = name => {
        this.setState({ action: name});
    }

    select = event => {
        console.log(this.state);
    }

    render() {
    return(
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>  
            <img className="img-fluid width: 100% \9" src= {this.state.imageOne} alt="First API"/> 
                <h4>Premiere API selectionnée est {this.state.apiOne}</h4>
            <Collapsible trigger="ACTION">
                <div id="example-collapse-text">
                        {this.selectAction()}
                </div>
            </Collapsible>
        </div>
    )}
}

class Facebook extends React.Component {
    select = event => {
        APIS.sendTwo("facebook", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>  
        <div className="box-part text-center">
        <img className="img-fluid width: 100% \9" src={facebookpng} alt="Facebook"/> 
            <div className="title">
                <h4>Facebook</h4>
            </div>
         </div>
    </div>
    )
}
}

class Clock extends React.Component {
    select = event => {
        APIS.sendTwo("clock", API.whoiam());
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
        APIS.sendTwo("youtube", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={youtubepng} alt="Youtube"/>
            <div className="title">
                <h4>Youtube</h4>
            </div>
         </div>
    </div>
    )}
}

class Googledrive extends React.Component {
    select = event => {
        APIS.sendTwo("googledrive", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={googledrivepng} alt="Google Drive"/>
            
            <div className="title">
                <h4>Googledrive</h4>
            </div>
         </div>
    </div>
    )}
}

class Gmail extends React.Component {
    select = event => {
        APIS.sendTwo("gmail", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={Gmailpng} alt="Gmail"/>
        
            <div className="title">
                <h4>Gmail</h4>
            </div>
         </div>
    </div>
    )}
}

class Meteo extends React.Component {
    select = event => {
        APIS.sendTwo("weather", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={weatherpng} alt="Trello"/>
            
            <div className="title">
                <h4>Weather Meteo</h4>
            </div>
         </div>
    </div>
    )}
}

class Steam extends React.Component {
    select = event => {
        APIS.sendTwo("steam", API.whoiam());
        window.location = '/apiboard';
        return;
      }
    render() {
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" onClick={this.select}>
               
        <div className="box-part text-center">
            
        <img className="img-fluid width: 100% \9" src={steampng} alt="Steam"/>
            <div className="title">
                <h4>Steam</h4>
            </div>
         </div>
    </div>
    )}
}

export default ApiBoard;