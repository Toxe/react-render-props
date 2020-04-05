import React from "react";

export default function HelloBasic(props) {
    return (
        <div>
            Hello, {props.render(false)}!
        </div>
    );
}
