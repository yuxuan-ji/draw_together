import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./Sketch";

export default class Canvas extends React.Component{
    constructor(props) {
        super(props);

        this.socket = props.socket;

    }

    render(){
        return (
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <div className="card-title">Draw</div>
                            <hr/>
                            <P5Wrapper sketch={sketch} socket={this.socket}/>

                        </div>

                        <div className="card-footer">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
