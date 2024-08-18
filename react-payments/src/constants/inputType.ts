import { InputCateoryKey, InputName, InputType } from "@/types/input";

export const INPUT_TYPE_CATEGORIES: Record<InputCateoryKey, InputType> = {
  CARD_NUMBER: {
    inputLabel: "카드번호",
    inputName: 'cardNumber',
    maxLength: 4,
    minLength: 4,
    inputInfo: Array.from({ length: 4 }, (_, index) => ({
      property: `cardNumber${index + 1}`,
      placeHolder: "1234",
    })),
  },
  EXPIRY_DATE: {
    inputLabel: "유효기간",
    inputName: 'expiryDate',
    maxLength: 2,
    minLength: 2,
    inputInfo: [
      {
        property: "month",
        placeHolder: "MM",
      },
      {
        property: "year",
        placeHolder: "YY",
      },
    ],
  },
  USER_NAME: {
    inputLabel: "소유자 이름",
    inputName: 'userName',
    maxLength: 20,
    minLength: 1,
    inputInfo: [
      {
        property: "userName",
        placeHolder: "HONG GILDONG",
      },
    ],
  },
  CVC: {
    inputLabel: "CVC",
    inputName: 'cvc',
    maxLength: 3,
    minLength: 3,
    inputInfo: [
      {
        property: "cvc",
        placeHolder: "123",
      },
    ],
  },
  PASSWORD: {
    inputLabel: "비밀번호 앞 2자리",
    inputName: 'password',
    maxLength: 2,
    minLength: 2,
    inputInfo: [
      {
        property: "password",
        placeHolder: "",
      },
    ],
  },
  CARD_COMPANY: {
    inputLabel: "카드사",
    inputName: 'cardCompany',
    maxLength: 1,
    minLength: 1,
    inputInfo: [
      {
        property: "cardCompany",
        placeHolder: "",
      }
    ]
  }
};

export const initialInput: Record<InputName, Record<string, string>> = {
  cardNumber: {
  },
  expiryDate: {},
  userName: {},
  cardCompany: {},
  cvc: {},
  password: {},
};
