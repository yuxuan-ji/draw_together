import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import Chat from './components/Chat';
import UsersList from './components/UsersList';
import Canvas from './components/Canvas';
// import 'popper.js';
// import 'bootstrap';
// import $ from 'jquery';
// import bootbox from 'bootbox';


class App extends Component {

  constructor(props) {
    super(props);
    var url = window.location.href;
    this.socket = io(url);

    while (!this.username) {
        this.username = prompt("Enter your username");
    }

  }

  render() {
    return (
        <div className="container-fluid h-100">
            <div className="row w-100 h-100">
                <div className="col-md-3"><UsersList username={this.username} socket={this.socket}/></div>
                <div className="col-md-6"><Canvas username={this.username} socket={this.socket}/></div>
                <div className="col-md-3"><Chat username={this.username} socket={this.socket}/></div>
            </div>
        </div>
    );
  }
}

export default App;
