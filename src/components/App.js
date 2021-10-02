import React, { Component } from "react";
import Statistics from "./statistics/Statistiсs";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.handleIncrementVote}
        ></FeedbackOptions>
        {/* отображение статистики */}
        <Statistics
          // options={["good", "neutral", "bad"]}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          //  total={this.state.total} positivePercentage={this.state.positivePercentage} */}
        />
      </div>
    );
  }
}

export default App;
