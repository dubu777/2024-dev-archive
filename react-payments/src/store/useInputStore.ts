import { DEFAULT_CARD_BOOLEAN } from "@/constants/card";
import { InputName } from "@/types/input";
import { generateInitialInputValues } from "@/utils/generateInitialInputValues";
import { create } from "zustand";

const initialInputValues = generateInitialInputValues();

interface useInputState {
  inputValues: Record<InputName, Record<string, string>>;
  errorMessages: Record<InputName, Record<string, string>>;
  inputCompletion: Record<InputName, boolean>;
  canSubmit: boolean;
  setInputCompletion: (inputName: InputName, isCompleted: boolean) => void;
  setInputValues: (
    value: string,
    property: string,
    inputName: InputName
  ) => void;
  setErrorMessages: (
    error: string,
    property: string,
    inputName: InputName
  ) => void;
  setCanSubmit: (isReadyToSubmit: boolean) => void;
  hasErrorMessage: (inputName: InputName) => boolean;
  isAllInputValidLength: (inputName: InputName, minLength: number) => boolean;
}

export const useInputStore = create<useInputState>((set, get) => ({
  inputValues: initialInputValues,
  errorMessages: initialInputValues,
  inputCompletion: DEFAULT_CARD_BOOLEAN,
  canSubmit: false,
  setInputValues: (value: string, property: string, inputName: InputName) => {
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [inputName]: {
          ...(state.inputValues[inputName] || {}),
          [property]: value,
        },
      },
    }));
  },
  setErrorMessages: (error: string, property: string, inputName: InputName) => {
    set((state) => ({
      errorMessages: {
        ...state.errorMessages,
        [inputName]: {
          ...(state.errorMessages[inputName] || {}),
          [property]: error,
        },
      },
    }));
  },
  setInputCompletion: (inputName: InputName, isCompleted: boolean) => {
    set((state) => ({
      inputCompletion: {
        ...state.inputCompletion,
        [inputName]: isCompleted,
      }
    }))
  },
  setCanSubmit: (isReadyToSubmit: boolean) => {
    set({canSubmit: isReadyToSubmit})
  },
  hasErrorMessage: (inputName: InputName) => {
    const currentErrors = get().errorMessages[inputName];
    return Object.values(currentErrors).some((error) => error);
  },
  isAllInputValidLength: (inputName: InputName, minLength: number) => {
    const currentValues = get().inputValues[inputName];
    return Object.values(currentValues).every(
      (value) => value.length >= minLength
    );
  },
}));
