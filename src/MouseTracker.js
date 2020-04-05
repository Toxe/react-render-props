import React, { Component } from "react";

export default class MouseTracker extends Component {
    state = {
        x: 0,
        y: 0,
    };

    handleMouseMove = (e) => {
        this.setState({ x: e.clientX, y: e.clientY });
    };

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state.x, this.state.y)}
            </div>
        )
    }
}
