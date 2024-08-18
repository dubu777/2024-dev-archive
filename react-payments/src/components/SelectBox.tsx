import { validateCardCompany } from "@/domain/InputValidation";
import useInputComplete from "@/hooks/useInputComplete";
import { useInputStore } from "@/store/useInputStore";
import { InputType } from "@/types/input";
import styled from "styled-components";

interface SelectBoxProps {
  options: string[];
  defaultValue: string;
  handleNextStep: () => void;
  inputFieldInfo: InputType;
}

export default function SelectBox({ options, defaultValue, handleNextStep, inputFieldInfo }: SelectBoxProps) {
  const { setInputValues } = useInputStore();
  useInputComplete({inputFieldInfo})
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    validateCardCompany(selected)
    setInputValues(selected, "cardCompany", "cardCompany");
    handleNextStep()
  };

  return (
    <Select onChange={handleSelect}>
      <option defaultValue={defaultValue} hidden>
        {defaultValue}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  padding: 10px;
`;
