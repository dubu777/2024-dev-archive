import { INPUT_TYPE_CATEGORIES } from "@/constants/inputType";
import { InputName, InputType } from "@/types/input";

export const generateInitialInputValues = (): Record<InputName, Record<string, string>> => {
  const initialValues: Record<InputName, Record<string, string>> = {} as Record<InputName, Record<string, string>>;

  Object.values(INPUT_TYPE_CATEGORIES).forEach((inputCategory: InputType) => {
    const inputName = inputCategory.inputName;
    initialValues[inputName] = {};

    inputCategory.inputInfo.forEach(info => {
      initialValues[inputName][info.property] = '';
    });
  });

  return initialValues;
};
