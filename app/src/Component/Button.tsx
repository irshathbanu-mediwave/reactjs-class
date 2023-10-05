import React from "react";

interface ButtonElementProps {
  label: string;
  onClick: () => void;
  id: string;
}

class ButtonElement extends React.Component<ButtonElementProps> {
  render() {
    const { label, onClick, id } = this.props;

    return (
      <button id={id} onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default ButtonElement;
