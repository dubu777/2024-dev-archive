import { CARD_COMPANY_COLOR } from "@/constants/card";
import { ERROR_MESSAGES } from "@/constants/message";
import { regularExpression } from "@/constants/regularExpression";
import { InputName } from "@/types/input";

const validateNumber = (str: string) => {
  if (!Number.isInteger(Number(str))) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_NUMBER);
  }
};

const validateBlank = (str: string) => {
  if (regularExpression.BLANK.test(str)) {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
};

const validateString = (str: string) => {
  if (regularExpression.DOUBLE_BLANK.test(str)) {
    throw new Error(ERROR_MESSAGES.INVALID_DOUBLE_BLANK);
  }
  if (!regularExpression.UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_UPPERCASE);
  }
  if (str !== str.trim()) {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
};

const validateMonth = (str: string) => {
  if (!(1 <= Number(str) && Number(str) <= 12)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
};

const validateYear = (str: string) => {
  if (!(0 <= Number(str) && Number(str) <= 99)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
};

export const validateCardCompany = (str: string) => {
  const cardNames = Object.keys(CARD_COMPANY_COLOR);
  const isCardIncluded = cardNames.includes(str)
  if(!isCardIncluded) {
    throw new Error(ERROR_MESSAGES.INVALID_CARD_COMPANY);
  }
}

export const isValidMinLength = (str: string, minLength: number) => {
  return str.length >= minLength;
}

export const isValidMinMaxLength = (str: string, minLength: number, maxLength: number) => {
  return (minLength <= str.length && str.length <= maxLength)
}

export const validateMinLength = (str: string, minLength: number) => {
  if (str.length < minLength) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }
};

export const validateValidLength = (
  str: string,
  minLength: number,
  maxLength: number
) => {
  if (str.length < minLength || str.length > maxLength) {
    throw new Error(`${minLength}자 이상 ${maxLength}이하로 입력해주세요`);
  }
};



export const InputValidation: Record<InputName, (str: string) => void> = {
  cardNumber: (str: string) => {
    validateNumber(str)
    validateBlank(str)
  },
  cardCompany: (str: string) => {
    validateCardCompany(str)
  },
  expiryDate: (str: string) => {
    validateMonth(str)
    validateYear(str)
    validateBlank(str)
  },
  userName: (str: string) => {
    validateString(str)
  },
  cvc: (str: string) => {
    validateBlank(str)
    validateNumber(str)
  },
  password: (str: string) => {
    validateBlank(str)
    validateNumber(str)
  },
}