'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isArray = _interopDefault(require('lodash/isArray'));
var isObject = _interopDefault(require('lodash/isObject'));
var isString = _interopDefault(require('lodash/isString'));
var isBoolean = _interopDefault(require('lodash/isBoolean'));
var isFunction = _interopDefault(require('lodash/isFunction'));
var camelCase = _interopDefault(require('lodash/camelCase'));

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};

var alphaNum = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validation = function (regex) {
  return function validate (value, ref) {
    var locale = ref.locale;

    if (Array.isArray(value)) {
      return value.every(function (val) { return validate(val, { locale: locale }); })
    }

    // Match at least one locale.
    if (!locale) {
      return Object.keys(regex).some(function (loc) { return regex[loc].test(value); })
    }

    return (regex[locale] || regex.en).test(value)
  }
};

var validate = validation(alpha$1);

var params = ['locale', 'message'];

var alpha = { validate: validate, params: params };

var validate$1 = validation(alphaNum);

var params$1 = ['locale', 'message'];

var alphaNum$1 = { validate: validate$1, params: params$1 };

var validate$2 = validation(alphaDash);

var params$2 = ['locale', 'message'];

var alphaDash$1 = { validate: validate$2, params: params$2 };

var validate$3 = validation(alphaSpaces);

var params$3 = ['locale', 'message'];

var alphaSpaces$1 = { validate: validate$3, params: params$3 };

var validate$4 = function (value, ref) {
  var exp = ref.exp;

  if (typeof exp === 'string') {
    exp = new RegExp(exp);
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$4(val, { exp: exp }); })
  }

  return exp.test(String(value))
};

var params$4 = ['exp', 'message'];

var regex = { validate: validate$4, params: params$4 };

var validate$5 = function (value) {
  var reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
  return reg.test(value)
};

var params$5 = ['message'];

var email = { validate: validate$5, params: params$5 };

var validate$6 = function (val, ref) {
	var value = ref.value;

	return val === value;
};

var params$6 = ['value', 'message'];

var equal = { validate: validate$6, params: params$6 };

var validate$7 = function (value) {
  if (!value) { return true }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$7(val); })
  } else {
    return /^[0-9]+$/.test(String(value))
  }
};

var params$7 = ['message'];

var numeric = { validate: validate$7, params: params$7 };

var validate$8 = function (value) {
  if (Array.isArray(value)) {
    return !!value.length
  }

  if (value === undefined || value === null) {
    return false
  }

  return !!String(value).trim().length
};

var params$8 = ['message'];

var required = { validate: validate$8, params: params$8 };

var validate$9 = function (value, ref) {
  var val = ref.val;
  var min = ref.min;
  var max = ref.max;

  if (value === undefined || value === null || value === '') {
    return false
  }

  if (max === undefined) {
    var length = Number(val||min);
    return value.length === length
  } else {
    var length$1 = String(value).length;
    min = Number(val||min);
    max = Number(max);
    return min <= length$1 && length$1 <= max
  }
};

var params$9 = ['min', 'max', 'message'];

var length = { validate: validate$9, params: params$9 };

var validate$10 = function (value, ref) {
  var min = ref.min;
  var max = ref.max;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$10(val, { min: min, max: max }); })
  } else {
    return Number(min) <= value && Number(max) >= value
  }
};

var params$10 = ['min', 'max', 'message'];

var between = { validate: validate$10, params: params$10 };

var validate$11 = function (value, ref) {
  var length = ref.length;

  if (value === undefined || value === null) {
    return false
  }
  return String(value).length >= Number(length)
};

var params$11 = ['length', 'message'];

var minLength = { validate: validate$11, params: params$11 };

var validate$12 = function (value, ref) {
  var length = ref.length;

  if (value === undefined || value === null) {
    return length >= 0
  }
  return String(value).length <= Number(length)
};

var params$12 = ['length', 'message'];

var maxLength = { validate: validate$12, params: params$12 };

var validate$13 = function (val, ref) {
  var value = ref.value;

  if (Array.isArray(val) || val === null || val === undefined || val === '') {
    return false
  }

  if (Array.isArray(val)) {
    return val.every(function (v) { return validate$13(v, { value: value }); })
  } else {
    return Number(val) >= value
  }
};

var params$13 = ['value', 'message'];

var min = { validate: validate$13, params: params$13 };

var validate$14 = function (val, ref) {
  var value = ref.value;

  if (val === null || val === undefined || val === '') {
    return true
  }

  if (Array.isArray(val)) {
    return val.every(function (v) { return validate$14(v, { value: value }); })
  } else {
    return Number(val) <= value
  }
};

var params$14 = ['value', 'message'];

var max = { validate: validate$14, params: params$14 };

var rules = {
  alpha: alpha,
  alphaNum: alphaNum$1,
  alphaDash: alphaDash$1,
  alphaSpaces: alphaSpaces$1,
  regex: regex,
  email: email,
  equal: equal,
  numeric: numeric,
  required: required,
  length: length,
  between: between,
  minLength: minLength,
  maxLength: maxLength,
  min: min,
  max: max
};

var en = {
  alphaDash: function () { return "May contain alpha-numeric characters as well as dashes and underscores."; },
  alphaNum: function () { return "May only contain alpha-numeric characters."; },
  alphaSpaces: function () { return "May only contain alphabetic characters as well as spaces."; },
  alpha: function () { return "May only contain alphabetic characters."; },
  regex: function () { return "Format is invalid."; },
  required: function () { return "Required."; },
  email: function () { return "Must be a valid email."; },
  included: function () { return "Must be a valid value."; },
  excluded: function () { return "Must be a valid value."; },
  numeric: function () { return "May only contain numeric characters."; },
  equal: function (ref) {
    var value = ref.value;

    return ("Must be identical to " + value + ".");
},
  between: function (ref) {
    var min = ref.min;
    var max = ref.max;

    return ("Value must be between " + min + " and " + max + ".");
},
  maxLength: function (ref) {
    var length = ref.length;

    return ("Length may not be greater than " + length + " characters.");
},
  minLength: function (ref) {
    var length = ref.length;

    return ("Length must be at least " + length + " characters.");
},
  max: function (ref) {
    var value = ref.value;

    return ("Value must be " + value + " or less.");
},
  min: function (ref) {
    var value = ref.value;

    return ("Value must be " + value + " or more.");
},
  length: function (ref) {
    var val = ref.val;
    var min = ref.min;
    var max = ref.max;

    if (max) {
      return ("Length must be between " + min + " and " + max + ".")
    } else {
      return ("Length must be " + (val||min))
    }
  }
};

var Messages = function Messages (lang) {
  var this$1 = this;

  var langs = { en: en };
  var messages = langs[lang];

  for (var key in messages) {
    if (messages.hasOwnProperty(key)) {
      this$1[key] = messages[key];
    }
  }
};

var messages = function (lang) {
  return new Messages(lang)
};

// parse rules from string
var parseFromString = function (rules, availables) {
  // split each rules
  rules = rules.split('|');
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    // split rule name and params
    rule = rule.split(':');
    var key = camelCase(rule[0]);
    var params = rule[1] ? rule[1].split(',') : [];
    // check for available rules
    if (availables[key]) {
      rules[i] = availables[key](params);
    }
  }
  return rules
};

// parse rules from object
var parseFromObject = function (rules, availables) {
  var result = [];
  for (var key in rules) {
    // skip loop if the property is from prototype
    if (!rules.hasOwnProperty(key)) { continue; }
    // check for available rules
    if (availables[key]) {
      var params = rules[key];
      result.push(availables[key](params));
    }
  }
  return result
};

// prepare rule parameters
var prepare = function (params, values) {
  var result = {};

  if (isArray(values)) {
    // mapping params from array values
    for (var key = 0; key < params.length; key++) {
      result[params[key]] = values[key];
    }
  } else if (isObject(values)) {
    // mapping params from object values
    result = values;
  } else {
    // mapping param from other values to first param
    result[params[0]] = !isBoolean(values) ? values : undefined;
  }

  // return object of params
  return result
};

// build error message
var error = function (initial, optional, params) {
  if (optional) {
    return isFunction(optional) ? optional(params) : optional
  } else {
    return isFunction(initial) ? initial(params) : initial
  }
};

// spawn a rule
var spawn = function (rule, message) {
  return function (options) {
    if ( options === void 0 ) options = {};

    options = prepare(rule.params, options);
    return function (value) {
      return rule.validate(value, options) || error(message, options.message, options)
    }
  }
};

// spawn available rules
var spawns = function (rules, messages) {
  var availables = {};
  for (var key in rules) {
    if (rules.hasOwnProperty(key)) {
      availables[key] = spawn(rules[key], messages[key]);
    }
  }
  return availables
};

var utils = {
  isObject: isObject,
  isString: isString,
  parseFromString: parseFromString,
  parseFromObject: parseFromObject,
  spawns: spawns
};

var Validator = function Validator (options) {
  // build messages
  this.messages = Object.assign({}, messages(options.lang), options.messages || {});

  // spawn available rules
  this.rules = utils.spawns(rules, this.messages);
};

Validator.prototype.parse = function parse (rules$$1) {
  return utils.isString(rules$$1)
    ? utils.parseFromString(rules$$1, this.rules) : utils.isObject(rules$$1)
      ? utils.parseFromObject(rules$$1, this.rules) : rules$$1
};

var Plugin = function Plugin () {};

Plugin.prototype.defaults = function defaults () {
  return {
    lang: 'en',
    prop: '$validator'
  }
};

Plugin.prototype.install = function install (Vue, options) {
    if ( options === void 0 ) options = {};

  // merge defaults with options
  this.options = Object.assign({}, this.defaults(), options);

  // creates a instance method that can be used inside of a Vue component
  Vue.prototype[this.options.prop] = new Validator(this.options);
};

var index = new Plugin();

module.exports = index;
