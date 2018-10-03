const validate = (val, { value }) => {
  if (Array.isArray(val) || val === null || val === undefined || val === '') {
    return false
  }

  if (Array.isArray(val)) {
    return val.every(v => validate(v, { value }))
  } else {
    return Number(val) >= value
  }
}

const params = ['value', 'message']

export default { validate, params }
