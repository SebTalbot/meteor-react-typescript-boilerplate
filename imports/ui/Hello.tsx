import React from "react";
import { incrementNumber } from "imports/lib/number";

type Props = {
  name?: string;
};

type State = { counter: number };

export default class Hello extends React.Component<Props, State> {
  state = {
    counter: 0
  };

  increment() {
    const currentCounter = this.state.counter;
    this.setState({
      counter: incrementNumber(currentCounter)
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <button onClick={() => this.increment()}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    );
  }
}
