const validate = (val, { value }) => {
  if (val === null || val === undefined || val === '') {
    return true
  }

  if (Array.isArray(val)) {
    return val.every(v => validate(v, { value }))
  } else {
    return Number(val) <= value
  }
}

const params = ['value', 'message']

export default { validate, params }
