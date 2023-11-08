# translator-for-you

A simple npm package to translate words to the specified language using Google Translate API.

## Installation

```bash
npm install translator-for-you
```

## Usage

```js
const translate = require('translator-for-you');

// Translate 'hello' to Hindi
translate('hello', 'hi')
  .then(result => console.log(result))
  .catch(err => console.log(err));
```
The `translate` function takes two arguments:

`word`: The word you want to translate.
`language`: The language you want to translate to. You can use ISO 639-1 language codes.

The language argument should be in form of ISO 639-1 codes.  
Few of language ISO codes are below in the table but if the language you want is not available then [click](https://lingohub.com/academy/best-practices/iso-639-1-list) here to view more

| Language | ISO 639-1 |
| -------- | -------- |
| English  | en       |
| Hindi    | hi       |
| Arabic   | ar       |
| Chinese (Simplified)  | zh-CN  |
| Chinese (Traditional) | zh-TW  |
| Dutch    | nl       |
| French   | fr       |
| German   | de       |
| Italian  | it       |
| Japanese | ja       |
| Korean   | ko       |
| Portuguese (Brazil)   | pt-BR  |
| Russian  | ru       |
| Spanish  | es       |
| Turkish  | tr       |

