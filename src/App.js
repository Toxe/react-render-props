import React, { Component } from "react";
import HelloBasic from "./HelloBasic";
import HelloImproved from "./HelloImproved";
import MouseTrackerAndCounter from "./MouseTrackerAndCounter";

export default class App extends Component {
    render() {
        return (
            <div>
                <HelloBasic render={(loggedIn) => (loggedIn ? "logged-in user" : "world")} />
                <HelloImproved>{(loggedIn) => (loggedIn ? "logged-in user" : "world")}</HelloImproved>

                <MouseTrackerAndCounter />
            </div>
        );
    }
}
