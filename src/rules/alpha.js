import { validation, alpha } from './alpha-helper'

const validate = validation(alpha)

const params = ['locale', 'message']

export default { validate, params }
