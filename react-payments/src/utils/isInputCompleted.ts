import { isLengthValid } from "@/domain/InputValidation";
import { InputType } from "@/types/input";

interface Props {
  currentErrors: Record<number, string>;
  values: Record<string, string>;
  inputType: InputType;
}

const isInputFieldCompleted = ({ currentErrors, values, inputType }: Props) => {
  // errorMessage가 없는지 확인
  const hasNoError = Object.values(currentErrors).every(
    (error) => error === ""
  );
  // 인풋필드의 값의 길이가 유효한지 확인
  const isValuesValid = inputType.inputInfo.every((info) => {
    const value = values[info.property] || "";
    console.log(value, info.minLength,  isLengthValid(value, info.minLength), '검증 값');
    
    return isLengthValid(value, info.minLength);
  });
  return hasNoError && isValuesValid;
};

export default isInputFieldCompleted;
