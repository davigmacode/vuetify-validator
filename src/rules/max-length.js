const validate = (value, { length }) => {
  if (value === undefined || value === null) {
    return length >= 0
  }
  return String(value).length <= Number(length)
}

const params = ['length', 'message']

export default { validate, params }
