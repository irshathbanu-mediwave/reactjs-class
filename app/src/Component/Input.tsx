import React from "react";
interface InputElementProps {
  type: string;
  placeholder: string;
  value: string;
  id: string;
  name: string;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class InputElement extends React.Component<InputElementProps> {
  render() {
    const { type, placeholder, value, onChange, id, name } = this.props;

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        required
      />
    );
  }
}

export default InputElement;
