import { Component } from "react";

export default class Counter extends Component {
    state = {
        counter: 10,
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
        return this.props.children(this.state.counter, this.decCounter, this.incCounter);
    }
}
