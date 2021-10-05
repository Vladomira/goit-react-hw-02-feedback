import PropTypes from "prop-types";
import React, { Component } from "react";
import "./styles/statistics.scss";

class Notification extends Component {
  static defaultProps = {
    title: PropTypes.string.isRequired,
  };
  render() {
    const { message } = this.props;
    return (
      <section className="section">
        <h3 className="title__notification">{message}</h3>
      </section>
    );
  }
}

export default Notification;
