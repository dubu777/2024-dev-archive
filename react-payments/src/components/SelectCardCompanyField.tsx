import { CARD_COMPANY_COLOR } from "@/constants/card";
import FieldTitle from "./FieldTitle";
import { InputFieldContainer } from "./InputField";
import SelectBox from "./SelectBox";
import { InputType } from "@/types/input";

interface SelectCardCompanyFieldProps {
  handleNextStep: () => void;
  inputFieldInfo: InputType;
  title: string;
}

const animationVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

const cardCompanys = Object.keys(CARD_COMPANY_COLOR).map((company) => company);
export default function SelectCardCompanyField({
  handleNextStep,
  inputFieldInfo,
  title,
}: SelectCardCompanyFieldProps) {
  return (
    <>
      <InputFieldContainer
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <FieldTitle title={title} />
        <SelectBox
          options={cardCompanys}
          defaultValue="카드사를 선택해주세요"
          handleNextStep={handleNextStep}
          inputFieldInfo={inputFieldInfo}
        />
      </InputFieldContainer>
    </>
  );
}
