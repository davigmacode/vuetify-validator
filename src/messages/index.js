import en from './en'

class Messages {
  constructor (lang) {
    let langs = { en }
    let messages = langs[lang]

    for (const key in messages) {
      if (messages.hasOwnProperty(key)) {
        this[key] = messages[key]
      }
    }
  }
}

export default (lang) => {
  return new Messages(lang)
}
