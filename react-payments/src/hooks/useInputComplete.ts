import { useInputStore } from "@/store/useInputStore";
import { InputType } from "@/types/input";
import { useEffect } from "react";

interface useInputCompleteProps {
  inputFieldInfo: InputType;
}

export default function useInputComplete({inputFieldInfo}: useInputCompleteProps) {
  const {inputValues, hasErrorMessage, isAllInputValidLength, inputCompletion, setInputCompletion, setCanSubmit} = useInputStore();
  const inputName = inputFieldInfo.inputName;
  const minLength = inputFieldInfo.minLength;

  useEffect(() => {
    const isCompleted = !hasErrorMessage(inputName) && isAllInputValidLength(inputName, minLength)
      setInputCompletion(inputName, isCompleted)
  }, [inputValues])

  useEffect(() => {
    if(Object.values(inputCompletion).every((value) => value)) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [inputCompletion])
}