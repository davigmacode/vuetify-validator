import rules from './rules'
import messages from './messages'
import utils from './utils'

class Validator {

  constructor (options) {
    // build messages
    this.messages = Object.assign({}, messages(options.lang), options.messages || {})

    // spawn available rules
    this.rules = utils.spawns(rules, this.messages)
  }

  parse (rules) {
    return utils.isString(rules)
      ? utils.parseFromString(rules, this.rules) : utils.isObject(rules)
        ? utils.parseFromObject(rules, this.rules) : rules
  }

}

export default Validator
