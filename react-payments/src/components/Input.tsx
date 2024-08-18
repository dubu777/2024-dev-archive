
import useInput from "@/hooks/useInput";
import { InputInfo, InputName } from "@/types/input"
import { forwardRef } from "react";
import styled from "styled-components"

interface InputProps {
  inputInfo: InputInfo;
  isError: boolean;
  inputName: InputName;
  handleNextInput: () => void;
  minLength: number;
  maxLength: number;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {isError, inputInfo, inputName, handleNextInput, minLength, maxLength} = props;
  const {handleChange, handleBlur, handleKeyDown} = useInput({
    inputName, 
    minLength, 
    property: inputInfo.property,
    handleNextInput,
  });
  
  return (
    <StyledInput
      ref={ref}
      $error={isError}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      maxLength={maxLength}
    />
  )
})


const StyledInput = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid ${({ $error }) => $error ? 'red' : 'gray'};
  outline-color: ${({ $error }) => $error ? 'red' : 'gray'};
`;
