import React, { Component } from "react";
import Section from "./Section";
import Notification from "./Notification";
import Statistics from "./Statistics/Statistiсs";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Container from "./Container/Container";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementVote = (evt) => {
    const { target } = evt;
    this.setState((prevState) => ({
      //   [evt]: prevState[evt] + 1,
      [target.textContent]: prevState[target.textContent] + 1,
    }));
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (prevValue, nextValue) => prevValue + nextValue
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    if (isNaN(positivePercentage)) {
      return "there will be a";
    } else {
      return positivePercentage;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrementVote}
        />
        <Section title="Statistics"> </Section>
        <Notification message="No feedback given"></Notification>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      </Container>
    );
  }
}

export default App;
// =====

// =====
//  {/* {Object.values(this.state).map((val) =>
//             val > 0 ? ( */}
// {/* ) */}
//       {/* )} */}
//       {/* {total > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={percentage}
//           />
//         ) : (
//           <Notification message="No feedback given"></Notification>
//         )} */}
//       {/* </Section> */}
