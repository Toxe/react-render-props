import React from "react";

export default function Box(props) {
    return (
        <div className="Box">
            <h1>{props.title}</h1>
            <div>
                Current mouse position: ({props.mouse.x} / {props.mouse.y})
            </div>
            <div>Counter: {props.counter.value}</div>
            <div>
                <button onClick={props.counter.dec}>-</button>
                <button onClick={props.counter.inc}>+</button>
            </div>
            <div>
                <em>
                    Note: We are tracking the mouse position even outside of the box, but for the sake of this example
                    this is fine.
                </em>
            </div>
        </div>
    );
}
