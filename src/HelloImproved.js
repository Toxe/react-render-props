import React from "react";

export default function HelloImproved(props) {
    return (
        <div>
            Hello, {props.children(false)}!
        </div>
    );
}
