import { InputType } from "@/types/input";
import styled from "styled-components";
import FieldTitle from "./FieldTitle";
import useNextRef from "@/hooks/useNextRef";
import { Input } from "./Input";
import { useInputStore } from "@/store/useInputStore";
import useInputComplete from "@/hooks/useInputComplete";
import { motion } from "framer-motion";

interface InputFieldProps {
  inputFieldInfo: InputType;
  handleNextStep: () => void;
  title: string;
  subtitle?: string;
}

const animationVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

export default function InputField({
  inputFieldInfo,
  handleNextStep,
  title,
  subtitle,
}: InputFieldProps) {
  const { inputRef, handleNextInput } = useNextRef({
    inputFieldInfo,
    handleNextStep,
  });
  const { errorMessages } = useInputStore();
  const currentErrors = errorMessages[inputFieldInfo.inputName];
  useInputComplete({ inputFieldInfo });
  return (
    <InputFieldContainer
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      <FieldTitle title={title} subtitle={subtitle} />
      <InputLabel>{inputFieldInfo.inputLabel}</InputLabel>
      <InputWrapper>
        {inputFieldInfo.inputInfo.map((info, index) => (
          <Input
            key={info.property}
            ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
            inputInfo={info}
            minLength={inputFieldInfo.minLength}
            maxLength={inputFieldInfo.maxLength}
            inputName={inputFieldInfo.inputName}
            isError={!!currentErrors[info.property]}
            handleNextInput={() => handleNextInput(index)}
          />
        ))}
      </InputWrapper>
      {
        <ErrorMessage>
          {Object.values(currentErrors).find((error) => error)}
        </ErrorMessage>
      }
    </InputFieldContainer>
  );
}

export const InputFieldContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

const InputLabel = styled.p`
  font-size: 12px;
  color: #0a0d13;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 9.5px;
`;
