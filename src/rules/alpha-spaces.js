import { validation, alphaSpaces } from './alpha-helper'

const validate = validation(alphaSpaces)

const params = ['locale', 'message']

export default { validate, params }
