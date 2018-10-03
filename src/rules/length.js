const validate = (value, { val, min, max }) => {
  if (value === undefined || value === null || value === '') {
    return false
  }

  if (max === undefined) {
    let length = Number(val||min)
    return value.length === length
  } else {
    let length = String(value).length
    min = Number(val||min)
    max = Number(max)
    return min <= length && length <= max
  }
}

const params = ['min', 'max', 'message']

export default { validate, params }
