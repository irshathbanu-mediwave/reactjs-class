import React from "react";

class Inputelement extends React.Component {
  render() {
    return (
      <div id="input-conatiner">
        <div id="firstname">
          <label htmlFor="firstname">FirstName:</label>
          <input type="text" />
        </div>

        <div id="lastname">
          <label htmlFor="firstname">LastName:</label>
          <input type="text" />
        </div>
        <div id="Age">
          <label htmlFor="text">Age:</label>
          <input type="number" />
        </div>
      </div>
    );
  }
}
export default Inputelement;
