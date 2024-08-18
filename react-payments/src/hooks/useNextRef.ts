import { useInputStore } from "@/store/useInputStore";
import { InputType } from "@/types/input";
import { useEffect, useRef } from "react";

interface useNextRefProps { 
  inputFieldInfo: InputType;
  handleNextStep: () => void;
}

export default function useNextRef({inputFieldInfo, handleNextStep}: useNextRefProps) {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const {inputValues, isAllInputValidLength} = useInputStore();
  const inputName = inputFieldInfo.inputName;
  const minLength = inputFieldInfo.minLength
  
  useEffect(() => {
    if(inputRef.current[0]) {
      inputRef.current[0].focus()
    }
  }, [])

  // inputValues의 비동기적 상태 업데이트로 인해 상태가 업데이트 되기전에 currentInputLength가 계산되어서
  // handleNextStep가 호출되지 않는 문제를 해결하기 위해
  // useEffect와 의존성 배열에 inputValues를 넣어 업데이트 된 이후에 코드를 실행하여
  // 정상적으로 동작하게 만듬
  useEffect(() => {
      if(inputName === 'userName') return
      const inputLength = inputFieldInfo.inputInfo.length;
      const currentInputLength = Object.keys(inputValues[inputName]).length;
      if (inputLength === currentInputLength && isAllInputValidLength(inputName, minLength)) {
        handleNextStep()
      }
  }, [inputValues])

  const handleNextInput = (index: number) => {
    const inputLength = inputFieldInfo.inputInfo.length;
    const currentInputLength = Object.keys(inputValues[inputName]).length;
    if (inputLength === currentInputLength && isAllInputValidLength(inputName, minLength)) {
      handleNextStep()
    }
    if (inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus()
    }
  }


  return {inputRef, handleNextInput}
}