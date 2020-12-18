import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }


  renderContent(){
    if (this.state.errorMessage == null && this.state.lat != null) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }
    if (this.state.errorMessage != null && this.state.lat == null) {
      return <div className="ui red message">{this.state.errorMessage}</div>;
    }
    return (
      <Spinner ></Spinner>
    );
  }

  render() {
    console.log("render()");

    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
    
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
