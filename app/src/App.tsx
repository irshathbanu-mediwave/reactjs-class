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
    alert("Form is submitted is sucessfully");
    console.log(this.state);
  };
  render() {
    const { ButtonElement, InputElement } = Components;
    return (
      <div id="App">
        <div id="img-conatiner">
          <img
            src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            id="img-item"
            alt="Profile-picture"
          />
        </div>
        <div id="Fisrtname-div">
          <label>First Name:</label>

          <InputElement
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            id="Firstname"
            name="Firstname"
          />
        </div>
        <div id="lastname-div">
          <label>Last Name:</label>
          <InputElement
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
            id="Lastname"
            name="Lastname"
          />
        </div>
        <div id="Age-div">
          <label id="age-label">Age:</label>
          <InputElement
            type="number"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleAgeChange}
            id="Age"
            name="Age"
          />
        </div>
        <div id="Btn">
          <ButtonElement
            id="submit-btn"
            onClick={this.handleSubmit}
            label="Submit"
          />
        </div>
      </div>
    );
  }
}
export default MyForm;
