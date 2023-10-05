import React from "react";

interface ButtonElementProps {
  label: string;
  onClick: () => void;
}

class ButtonElement extends React.Component<ButtonElementProps> {
  render() {
    const { label, onClick } = this.props;

    return <button onClick={onClick}>{label}</button>;
  }
}

export default ButtonElement;
