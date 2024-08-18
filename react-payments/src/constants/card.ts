import { CardCompany } from "@/types/card";
import { InputName } from "@/types/input";

export const CARD_COMPANY_CATEGORIES: CardCompany[] = [
  {
    name: "BC카드",
    color: "#f04651",
  },
  {
    name: "신한카드",
    color: "#0046FF",
  },
  {
    name: "카카오뱅크",
    color: "#FFE600",
  },
  {
    name: "현대카드",
    color: "#000000",
  },
  {
    name: "우리카드",
    color: "#007BC8",
  },
  {
    name: "롯데카드",
    color: "#ED1C24",
  },
  {
    name: "하나카드",
    color: "#009490",
  },
  {
    name: "국민카드",
    color: "#6A6056",
  },
];

export const CARD_COMPANY_COLOR: Record<string, string> = {
  BC카드: "#f04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};

export const DEFAULT_CARD_BOOLEAN: Record<InputName, boolean> = {
  cardNumber: false,
  cardCompany: false,
  expiryDate: false,
  userName: false,
  cvc: false,
  password: false,
};
