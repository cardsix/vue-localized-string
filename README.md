A vue plugin to use localized string object like { "en": "hello world", "zh": "你好 世界" }

```
// If using a module system (e.g. webpack), import LocalizedString and then call Vue.use(LocalizedString).
// var LocalizedString = require('vue-Localized_string');
// Vue.use(LocalizedString);


// In a component.

this.$setLang('zh'); // Set current language.

// Grab a localizedString.
var localizedStringObj = {
  en: 'hello world',
  zh: '你好 世界'
};

console.log(this.$localizedString(localizedStringObj)); // 你好 世界
