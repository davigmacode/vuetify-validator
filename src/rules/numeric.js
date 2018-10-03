const validate = (value) => {
  if (!value) return true

  if (Array.isArray(value)) {
    return value.every(val => validate(val))
  } else {
    return /^[0-9]+$/.test(String(value))
  }
}

const params = ['message']

export default { validate, params }
