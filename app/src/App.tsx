import Components from "./Component";
import React, { Component } from "react";
import "./App.css";

// interface MyFormState {
//   firstName: string;
//   lastName: string;
//   age: string;
// // }

class MyForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
  };
  handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ lastName: event.target.value });
  };
  handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ age: parseInt(event.target.value, 10) || 0 });
  };

  handleSubmit = () => {
    // const { firstName, lastName, age } = this.state;
    console.log(this.state);
  };
  render() {
    const { ButtonElement, InputElement } = Components;
    return (
      <div id="App">
        <div id="Fisrtname">
          <label>First Name:</label>
          <InputElement
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </div>
        <div id="lastname">
          <label>Last Name:</label>
          <InputElement
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </div>
        <div id="Age">
          <label>Age:</label>
          <InputElement
            type="number"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
        </div>
        <div id="Btn">
          <ButtonElement onClick={this.handleSubmit} label="Submit" />
        </div>
      </div>
    );
  }
}
export default MyForm;
