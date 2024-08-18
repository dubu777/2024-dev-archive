export interface CardNumbers {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export interface ExpiryDate {
  month: string;
  year: string;
}

export interface CardCompany {
  name: string;
  color: string;
}

export interface CardInfoType {
  cardNumber: CardNumbers;
  expiryDate: ExpiryDate;
  userName: {
    userName: string;
  };
  cardCompany: {
    cardCompany: string
  };
  cvc: {
    cvc: string
  };
  password: {
    password: string
  };
}