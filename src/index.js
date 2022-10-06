import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: undefined, errorMessage: "" }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat &&!this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}/>;
    } else if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else {
      return <Loader text="Ждем разрешения геолокации..."/> ;
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
