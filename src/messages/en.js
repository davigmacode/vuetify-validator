export default {
  alphaDash: () => `May contain alpha-numeric characters as well as dashes and underscores.`,
  alphaNum: () => `May only contain alpha-numeric characters.`,
  alphaSpaces: () => `May only contain alphabetic characters as well as spaces.`,
  alpha: () => `May only contain alphabetic characters.`,
  regex: () => `Format is invalid.`,
  required: () => `Required.`,
  email: () => `Must be a valid email.`,
  included: () => `Must be a valid value.`,
  excluded: () => `Must be a valid value.`,
  numeric: () => `May only contain numeric characters.`,
  equal: ({ value }) => `Must be identical to ${value}.`,
  between: ({ min, max }) => `Value must be between ${min} and ${max}.`,
  maxLength: ({ length }) => `Length may not be greater than ${length} characters.`,
  minLength: ({ length }) => `Length must be at least ${length} characters.`,
  max: ({ value }) => `Value must be ${value} or less.`,
  min: ({ value }) => `Value must be ${value} or more.`,
  length: ({ val, min, max }) => {
    if (max) {
      return `Length must be between ${min} and ${max}.`
    } else {
      return `Length must be ${val||min}`
    }
  }
}
