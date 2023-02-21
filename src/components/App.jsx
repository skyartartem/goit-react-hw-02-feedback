import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import css from './App.module.css'

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  updateState = nameFeedback => {
    this.setState(oldData => {
      let obj = { ...oldData };
      obj[nameFeedback] = oldData[nameFeedback] + 1;
      return obj;
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100 || 0
    );
  };

  render() {
    return (
      <div className={css.container}
        // style={{
          // height: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 24,
          // color: '#010101',
        // }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions updateState={this.updateState} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ?
            <Notification message="There is no feedback yet..." /> :
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />}
        </Section>
      </div>
    );
  }
}
