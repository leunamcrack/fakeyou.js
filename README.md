![FakeYouJS Banner](https://user-images.githubusercontent.com/82254221/181195262-bd1ca7bb-9788-4155-acb5-1e5d072436f4.png)

> **FakeYou.JS is a powerful [Node.js](https://nodejs.org) module that allows you to interact with the [FakeYouAPI](https://docs.fakeyou.com) easily.**

- [Login or use your token](#login-in-or-use-your-token) ([more info](https://docs.fakeyou.com))
- [Edit client user](#edit-client-user)
- [Search models](#search-models)
- [Make TTS requests](#make-tts-request)
- [Get mall data](#get-all-data)
- [Useful links](#useful-links)

### Login in or use your token
```js
const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client({
    token: 'anOptionalSecretToken',
    usernameOrEmail: 'aCoolUsernameOrEmail',
    password: 'aSuperSecretPassword'
});
await fy.start();
```

### Edit client user
```js
await fy.user.edit({
    discord: 'acoolusername#0000',
    ttsVisibility: false
});
fy.user;
```

### Search models
```js
let models = fy.searchModel('mario');
models.title;
```

### Make TTS Request
```js
await fy.start();
let voice = await fy.makeVoice('mario', 'A cool text to speech');
voice.audioURL;
```
```js
let model = fy.searchModel('mario');
if(model) {
    let voice = model.makeVoice('A cool text to speech');
    voice.toBuffer();
}
```

### Get all data
```js
await fy.models.fetch('TM:7wbtjphx8h8v');
```
```js
let result = fy.results.get('TR:tn7gq96wg6httvnq91y4y9fka76nj');
if(result) {
    await voice.fetch()
}
```

### Useful links:
- [Package](https://npmjs.com/package/fakeyou.js)
- [GitHub](https://github.com/fakeyoujs/fakeyou.js)
- [Discord Server](https://discord.gg/H72KFXm)

**Documentation coming soon...**
