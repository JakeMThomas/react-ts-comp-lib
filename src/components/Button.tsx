import React from 'react';
import '../styles/Button.css'

interface ButtonProps {
  // Add any props that your component may need, such as the button text and onClick handler
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
