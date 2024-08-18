import { KEYS_AND_SYMBOLS } from "@/constants/message";
import { InputValidation, isValidMinLength, validateMinLength } from "@/domain/InputValidation"
import { useInputStore } from "@/store/useInputStore";
import { InputName } from "@/types/input";

interface useInputProps {
  inputName: InputName;
  minLength: number;
  property: string;
  handleNextInput: () => void
}

export default function useInput({inputName, minLength, property, handleNextInput}: useInputProps) {
  const {inputValues, setInputValues, setErrorMessages, hasErrorMessage} = useInputStore();
  const currentValidation = InputValidation[inputName]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleTryCatch(() => {
      currentValidation(inputValue)
      setInputValues(inputValue, property, inputName)
      setErrorMessages('', property, inputName)
    })
    if (inputName !== "userName" && !hasErrorMessage(inputName) && isValidMinLength(inputValue, minLength)) {
      handleNextInput()
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleTryCatch(() => {
      currentValidation(inputValue)
      validateMinLength(inputValue, minLength)
    })
    if (!hasErrorMessage(inputName) && isValidMinLength(inputValue, minLength)) {
      handleNextInput()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = inputValues[inputName][property]
    if (e.key === KEYS_AND_SYMBOLS.ENTER_KEY) {
      handleTryCatch(() => {
        currentValidation(inputValue)
        validateMinLength(inputValue, minLength)
      })
      if (!hasErrorMessage(inputName) && isValidMinLength(inputValue, minLength)) {
        handleNextInput()
      }
    }
  }


  const handleTryCatch = (funcs: () => void) => {
    try {
      funcs()
    } catch (error) {
      if(error instanceof Error) {
        setErrorMessages(error.message, property, inputName)
      }
    }
  };

  return {handleChange, handleBlur, handleKeyDown}
}