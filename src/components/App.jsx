import { Component } from "react";
import { Feedback } from "./Feedback";


export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0
  }

  updateState = (nameFeedback) => {
    this.setState((oldData => {
      let obj = {...oldData}
      obj[nameFeedback] = oldData[nameFeedback]+1
      return obj
    }))
}

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Feedback state={this.state} updateState={this.updateState} />
      </div>
    );
  }
}
