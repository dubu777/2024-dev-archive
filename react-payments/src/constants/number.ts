
const RANGE = {
  MONTH_RANGE: {
    MIN: 1,
    MAX: 12,
  },
  YEAR_RANGE: {
    MIN: 0,
    MAX: 99,
  },
} as const 

const CARD_CONFIG = {
  VISA: 4,
  MASTER: {
    START: 51,
    END: 55,
  },
} as const;


export {RANGE, CARD_CONFIG}