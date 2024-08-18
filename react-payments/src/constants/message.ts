const ERROR_MESSAGES = {
  INVALID_TRIM_BLANK: "불필요한 공백이 포함되어 있습니다.",
  INVALID_DOUBLE_BLANK: "빈칸이 두개 이상 포함되어 있습니다.",
  INVALID_MONTH: "카드의 유효한 유효기간(월)을 입력해주세요.",
  INVALID_YEAR: "카드의 유효한 유효기간(년도)을 입력해주세요.",
  INVALID_ONLY_NUMBER: "숫자만 입력해주세요.",
  INVALID_ONLY_UPPERCASE: "영대문자로만 입력해주세요.",
  INVALID_CARD_NUMBER_LENGTH: "카드 번호를 4자리씩 입력해주세요.",
  INVALID_LENGTH: "정보가 모두 입력되지 않았습니다.",
  INVALID_CARD_COMPANY: "등록되지 않은 카드사입니다.",
} as const;

const CARD_TYPE = {
  VISA: "visa",
  MASTER: "master",
} as const;

const KEYS_AND_SYMBOLS = {
  SECRET_NUMBER: "•",
  SLASH: " / ",
  ENTER_KEY: "Enter",
};

const INPUT_TITLE = {
  CARD_NUMBER: {
    TITLE: "결제할 카드 번호를 입력해 주세요.",
    SUBTITLE: "본인 명의의 카드만 결제 가능합니다."
  },
  EXPIRY_DATE: {
    TITLE: "카드 유효기간을 입력해 주세요.",
    SUBTITLE: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  },
  USER_NAME: {
    TITLE: "카드 소유자 이름을 입력해 주세요.",
  },
  CVC: {
    TITLE: "CVC 번호를 입력해 주세요.",
  },
  PASSWORD: {
    TITLE: "비밀번호를 입력해 주세요.",
  },
  CARD_COMPANY: {
    TITLE: "카드사를 선택해 주세요."
  }
} as const
export { ERROR_MESSAGES, CARD_TYPE, KEYS_AND_SYMBOLS, INPUT_TITLE };
