import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import isFunction from 'lodash/isFunction'
import camelCase from 'lodash/camelCase'

// parse rules from string
const parseFromString = (rules, availables) => {
  // split each rules
  rules = rules.split('|')
  for (let i = 0; i < rules.length; i++) {
    let rule = rules[i]
    // split rule name and params
    rule = rule.split(':')
    let key = camelCase(rule[0])
    let params = rule[1] ? rule[1].split(',') : []
    // check for available rules
    if (availables[key]) {
      rules[i] = availables[key](params)
    }
  }
  return rules
}

// parse rules from object
const parseFromObject = (rules, availables) => {
  let result = []
  for (let key in rules) {
    // skip loop if the property is from prototype
    if (!rules.hasOwnProperty(key)) continue;
    // check for available rules
    if (availables[key]) {
      let params = rules[key]
      result.push(availables[key](params))
    }
  }
  return result
}

// prepare rule parameters
const prepare = (params, values) => {
  let result = {}

  if (isArray(values)) {
    // mapping params from array values
    for (let key = 0; key < params.length; key++) {
      result[params[key]] = values[key]
    }
  } else if (isObject(values)) {
    // mapping params from object values
    result = values
  } else {
    // mapping param from other values to first param
    result[params[0]] = !isBoolean(values) ? values : undefined
  }

  // return object of params
  return result
}

// build error message
const error = (initial, optional, params) => {
  if (optional) {
    return isFunction(optional) ? optional(params) : optional
  } else {
    return isFunction(initial) ? initial(params) : initial
  }
}

// spawn a rule
const spawn = (rule, message) => {
  return (options = {}) => {
    options = prepare(rule.params, options)
    return (value) => {
      return rule.validate(value, options) || error(message, options.message, options)
    }
  }
}

// spawn available rules
const spawns = (rules, messages) => {
  let availables = {}
  for (const key in rules) {
    if (rules.hasOwnProperty(key)) {
      availables[key] = spawn(rules[key], messages[key])
    }
  }
  return availables
}

export default {
  isObject,
  isString,
  parseFromString,
  parseFromObject,
  spawns
}