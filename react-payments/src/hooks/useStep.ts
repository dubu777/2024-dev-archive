import { DEFAULT_CARD_BOOLEAN } from "@/constants/card";
import { InputName } from "@/types/input";
import { useState } from "react";

export default function useStep() {
  const [step, setStep] = useState<Record<InputName, boolean>>(DEFAULT_CARD_BOOLEAN);


  const handleNextStep = (nextStepName: InputName) => {
    setStep(prev => ({
      ...prev,
      [nextStepName] : true,
    }))
  }

  return {step, handleNextStep}
}