import React from 'react'
import { InputStyle } from './styles';

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  ...rest
}) => {
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      name={name}
      {...rest}
    />
  );
}

export default Input;