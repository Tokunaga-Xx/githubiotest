import React, { Component } from "react";
import "./App.css";
// import { transcode } from "buffer";

export default class App extends Component {
  checkbox = document.querySelector("input[name=theme]");

  componentDidMount() {
    let checkbox = document.querySelector("input[name=theme]");
    const trans = () => {
      document.body.classList.add("transition");
      window.setTimeout(() => {
        document.body.classList.remove("transition");
      }, 1000);
    };
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        trans();
        document.body.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.body.setAttribute("data-theme", "light");
      }
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Head</h1>
        <div className="toggle-container">
          <input type="checkbox" id="switch" name="theme" />
          <label htmlFor="switch">Toggle</label>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore
          expedita aut temporibus quisquam dicta odio architecto est sunt
          delectus.
        </p>
      </div>
    );
  }
}
