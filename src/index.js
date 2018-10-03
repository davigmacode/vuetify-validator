import Validator from './validator'

class Plugin {

  defaults () {
    return {
      lang: 'en',
      prop: '$validator'
    }
  }

  install (Vue, options = {}) {
    // merge defaults with options
    this.options = Object.assign({}, this.defaults(), options)

    // creates a instance method that can be used inside of a Vue component
    Vue.prototype[this.options.prop] = new Validator(this.options)
  }

}

export default new Plugin()
