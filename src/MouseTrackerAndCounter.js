import React, { Component } from "react";

export default class MouseTrackerAndCounter extends Component {
    state = {
        x: 0,
        y: 0,
        counter: 10,
    };

    handleMouseMove = (e) => {
        this.setState({ x: e.clientX, y: e.clientY });
    };

    decCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    };

    incCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        return (
            <div className="Box" onMouseMove={this.handleMouseMove}>
                <h1>MouseTrackerAndCounter</h1>
                <p>
                    Current mouse position: ({this.state.x} / {this.state.y})
                </p>
                <p>
                    Counter: {this.state.counter}
                    <button onClick={this.decCounter}>-</button>
                    <button onClick={this.incCounter}>+</button>
                </p>
            </div>
        );
    }
}
