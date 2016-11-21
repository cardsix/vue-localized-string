/* eslint-disable */
(function () {
  var localizedString = {}

  localizedString.install = function (Vue, options) {
    var defaultOptions = {
      lang: 'en',
    }
    var _options = Object.assign({}, defaultOptions, options)

    Vue.prototype.$localizedString = function (localizedString) {
      if (localizedString) {
        if (typeof localizedString[_options.lang] === 'string') { // return according to option 'lang'
          return localizedString[_options.lang]
        } else if (typeof localizedString['en'] === 'string') {   // return according to 'en' if something's wrong and property 'en' is a string.
          return localizedString['en']
        }
      }
      return ''
    }

    Vue.prototype.$setLang = function (lang) {
      _options.lang = lang || 'en'
    }
  }

  if (typeof exports == "object") {
    module.exports = localizedString
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return localizedString })
  } else if (window.Vue) {
    window.LocalizedString = localizedString
    Vue.use(LocalizedString)
  }
})()
