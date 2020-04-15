import React from "react";
import styled from "styled-components";

const LabelColor = styled.label`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-top: 0.5rem;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;
`;

const InputRadio = styled.input`
  display: none;
  &:checked + label {
    border: 1px solid #fff;
  }
`;

const ColorBox = ({ color, handleChangeColor, isChecked }) => (
  <>
    <InputRadio
      type="radio"
      name="color"
      id={color}
      onChange={() => handleChangeColor(color)}
      defaultChecked={isChecked}
    />
    <LabelColor htmlFor={color} color={color} />
  </>
);

export default ColorBox;
