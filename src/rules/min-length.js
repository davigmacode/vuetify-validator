const validate = (value, { length }) => {
  if (value === undefined || value === null) {
    return false
  }
  return String(value).length >= Number(length)
}

const params = ['length', 'message']

export default { validate, params }
