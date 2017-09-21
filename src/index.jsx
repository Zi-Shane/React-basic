import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import registerServiceWorker from "./registerServiceWorker";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    return (
      <div>
        <Header homeLink={this.state.homeLink} />
        <Home
          name={"rascal"}
          initialAge={10}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        >
        </Home>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
