import { validation, alphaNum } from './alpha-helper'

const validate = validation(alphaNum)

const params = ['locale', 'message']

export default { validate, params }
