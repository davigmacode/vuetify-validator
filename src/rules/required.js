const validate = (value) => {
  if (Array.isArray(value)) {
    return !!value.length
  }

  if (value === undefined || value === null) {
    return false
  }

  return !!String(value).trim().length
}

const params = ['message']

export default { validate, params }
