import React from "react";

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("componenetDidMount!");
  }

  componentDidUpdate() {
    console.log("componentmDidUpdate!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  render() {
    return (
      <div>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.state.props}
      </div>
    );
  }
}

export default Lifecycle;
