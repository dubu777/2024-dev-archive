

export type InputLabel = '카드번호' | '카드사' | '유효기간' | '소유자 이름' | 'CVC' | '비밀번호 앞 2자리';

export type InputCateoryKey = 'CARD_NUMBER' | 'CARD_COMPANY' | 'EXPIRY_DATE' | 'USER_NAME' | 'CVC' | 'PASSWORD';

export type InputName = 'cardNumber' | 'expiryDate' | 'userName' | 'cardCompany' | 'cvc' | 'password';

export interface InputInfo {
  property: string;
  placeHolder: string;
};

export interface InputType {
  inputLabel: InputLabel;
  inputName: InputName;
  maxLength: number;
  minLength: number;
  inputInfo: InputInfo[];
};
