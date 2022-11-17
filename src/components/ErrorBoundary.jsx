import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null,
  };

  componentDidCatch(error, info) {
    console.error("TCL Error >>>> ", error);
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <div className="error-message">Something went wrong!!!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
