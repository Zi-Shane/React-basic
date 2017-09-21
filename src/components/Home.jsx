import React, { Component } from "react";
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      check_text: "True",
      check: true,
      homeLink: props.initialLinkName
    };
  }

  onMakeOlder() {
    let age = this.state.age;
    this.setState({
      age: (age += 3)
    });
  }

  onCheck() {
    if (this.state.check) {
      this.setState({
        check: false,
        check_text: "False"
      });
    } else {
      this.setState({
        check: true,
        check_text: "True"
      });
    }
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <input
          onChange={() => this.onCheck()}
          type="checkbox"
          name="gender"
          value="male"
          checked={this.state.check}
        />
        {this.state.check_text}
        <p>
          My name is {this.props.name}, I'm {this.state.age} years old.
        </p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-info">
          Make Older
        </button>
        <hr />
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
        <button
          onClick={() => this.onChangeLink()}
          className="btn btn-primary"
        >
          Change Home Link
        </button>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  name: PropTypes.string
}
