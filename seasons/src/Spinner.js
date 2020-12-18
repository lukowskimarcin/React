import React from "react";

class Spinner extends React.Component {
  static defaultProps = {
    text: "Loading....",
  };

  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui indeterminate text loader">{this.props.text}</div>
      </div>
    );
  }
}

export default Spinner;
