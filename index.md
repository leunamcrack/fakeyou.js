---
home: true
heroText: null
heroImage: ./assets/img/banner.png
actionText: npm install fakeyou.js
actionLink: ./#
footer: Made by leunamcrack with 💙
---

## About

FakeYou.JS is a [Node.js](https://nodejs.org) module that allows you to interact with the [FakeYou API](https://docs.fakeyou.com) easily.

It can be used in [discord.js](https://discord.js.org) or another proyect where you need it, also has nearly 80% coverage of the API. This package is not afiliate with [fakeyou.com](https://fakeyou.com)

### Example:
```js
const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client({
    token: 'anOptionalSecretToken',
    usernameOrEmail: 'aCoolUsernameOrEmail',
    password: 'aSuperSecretPassword'
});
await fy.start();

let models = fy.searchModel('mario');
if(models.size > 0) {
  let result = await fy.makeTTS(models.first(), 'A cool text to speech');
  result.audioURL();
}
```
