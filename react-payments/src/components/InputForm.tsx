
import styled from "styled-components";
import SelectCardCompanyField from "./SelectCardCompanyField";
import useStep from "@/hooks/useStep";
import { INPUT_TITLE } from "@/constants/message";
import InputField from "./InputField";
import { INPUT_TYPE_CATEGORIES } from "@/constants/inputType";

interface InputFormProps {

}

export default function InputForm({}: InputFormProps) {
  const { step, handleNextStep } = useStep();
  const inputType = INPUT_TYPE_CATEGORIES;
  return (
    <InputFormContainer>
      {step["password"] && 
        <InputField
          inputFieldInfo={inputType.PASSWORD} 
          title={INPUT_TITLE.PASSWORD.TITLE}
          handleNextStep={() => handleNextStep("cardNumber")}
        />
      }
      {step["cvc"] && (
        <InputField
          inputFieldInfo={inputType.CVC}
          handleNextStep={() => handleNextStep("password")}
          title={INPUT_TITLE.CVC.TITLE}
        />
      )}
      {step["userName"] && (
        <InputField
          inputFieldInfo={inputType.USER_NAME}
          handleNextStep={() => handleNextStep("cvc")}
          title={INPUT_TITLE.USER_NAME.TITLE}
        />
      )}
      {step["expiryDate"] && (
        <InputField
          inputFieldInfo={inputType.EXPIRY_DATE}
          handleNextStep={() => handleNextStep("userName")}
          title={INPUT_TITLE.EXPIRY_DATE.TITLE}
          subtitle={INPUT_TITLE.EXPIRY_DATE.SUBTITLE}
        />
      )}
      {step["cardCompany"] && (
        <SelectCardCompanyField
          inputFieldInfo={inputType.CARD_COMPANY}
          handleNextStep={() => handleNextStep("expiryDate")}
          title={INPUT_TITLE.CARD_COMPANY.TITLE}
        />
      )}
      <InputField
        inputFieldInfo={inputType.CARD_NUMBER}
        handleNextStep={() => handleNextStep("cardCompany")}
        title={INPUT_TITLE.CARD_NUMBER.TITLE}
        subtitle={INPUT_TITLE.CARD_NUMBER.SUBTITLE}
      />
    </InputFormContainer>
  );
}

const InputFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 70%;
`;
