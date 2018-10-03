const validate = (value, { exp }) => {
  if (typeof exp === 'string') {
    exp = new RegExp(exp)
  }

  if (Array.isArray(value)) {
    return value.every(val => validate(val, { exp }))
  }

  return exp.test(String(value))
}

const params = ['exp', 'message']

export default { validate, params }