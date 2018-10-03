import includes from 'lodash/includes'

const validate = (value, { list }) => {
  return includes(list, value)
}

const params = ['list', 'message']

export default { validate, params }
