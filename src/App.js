import React, { Component } from "react";
import HelloBasic from "./HelloBasic";
import HelloImproved from "./HelloImproved";
import MouseTrackerAndCounter from "./MouseTrackerAndCounter";
import MouseTracker from "./MouseTracker";
import Counter from "./Counter";

export default class App extends Component {
    render() {
        return (
            <div>
                <HelloBasic render={(loggedIn) => (loggedIn ? "logged-in user" : "world")} />
                <HelloImproved>{(loggedIn) => (loggedIn ? "logged-in user" : "world")}</HelloImproved>

                <MouseTrackerAndCounter />

                <MouseTracker>
                    {(mouseX, mouseY) => (
                        <div className="Box">
                            <h1>MouseTracker and Counter</h1>
                            <div>
                                Current mouse position: ({mouseX} / {mouseY})
                            </div>
                            <Counter>
                                {(counter, dec, inc) => (
                                    <>
                                        <div>Counter: {counter}</div>
                                        <div>
                                            <button onClick={dec}>-</button>
                                            <button onClick={inc}>+</button>
                                        </div>
                                    </>
                                )}
                            </Counter>
                            <div>
                                <em>
                                    Note: We are tracking the mouse position even outside of the box, but for the sake
                                    of this example this is fine.
                                </em>
                            </div>
                        </div>
                    )}
                </MouseTracker>
            </div>
        );
    }
}
