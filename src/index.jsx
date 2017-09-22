import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Route } from "react-router-dom";

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
        />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
