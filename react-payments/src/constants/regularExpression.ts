const regularExpression = {
  DOUBLE_BLANK: / {2,}/,
  UPPERCASE_AND_SPACE_ONLY: /^[A-Z\s]+$/,
  BLANK: /\s/,
} as const;

export { regularExpression };
