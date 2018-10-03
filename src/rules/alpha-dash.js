import { validation, alphaDash } from './alpha-helper'

const validate = validation(alphaDash)

const params = ['locale', 'message']

export default { validate, params }
