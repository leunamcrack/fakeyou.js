---
home: true
heroText: null
heroImage: ./assets/img/banner.png
actionText: npm install fakeyou.js
actionLink: ./#
isCopy: true
footer: Made by leunamcrack with 💙
---

### About
fakeyou.js is a [Node.js](https://nodejs.org) module that allows you to interact with the [FakeYouAPI](https://docs.fakeyou.com) easily. Adopts an object-oriented approach that makes your code much neater and easier to understand.

It can be used in [discord.js](https://discord.js.org) or another proyect where you need it, also has the most possible coverage of the API and now this package is recognized by [FakeYou](https://fakeyou.com)

### Example
```js
const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client({
    token: 'anOptionalSecretToken',
    usernameOrEmail: 'anOptionalCoolUsernameOrEmail',
    password: 'anOptionalSuperSecretPassword'
});
await fy.start(); //required

let models = fy.searchModel('mario');
if(models.size >= 1) {
  let result = await fy.makeTTS(models.first(), 'A cool text to speech');
  result.audioURL();
}
```
