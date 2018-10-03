const validate = (value, { min, max }) => {
  if (Array.isArray(value)) {
    return value.every(val => validate(val, { min, max }))
  } else {
    return Number(min) <= value && Number(max) >= value
  }
}

const params = ['min', 'max', 'message']

export default { validate, params }
