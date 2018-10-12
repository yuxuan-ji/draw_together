import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import Chat from './components/Chat';
import UsersList from './components/UsersList';
import Canvas from './components/Canvas';


class App extends Component {

  constructor(props) {
    super(props);
    const regexPort = new RegExp(':[\\d]+/');
    var url = window.location.href.split(regexPort)[0];
    var port = process.env.PORT || 8000;
    this.socket = io(url + ':' + port);

  }

  render() {
    return (
        <div className="container-fluid h-100">
            <div className="row w-100 h-100">
                <div className="col-md-3"><UsersList username="bob" socket={this.socket}/></div>
                <div className="col-md-6"><Canvas username="bob" socket={this.socket}/></div>
                <div className="col-md-3"><Chat username="bob" socket={this.socket}/></div>
            </div>
        </div>
    );
  }
}

export default App;
