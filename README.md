<div align="center">
    <p><a href="https://fakeyou.js.org"><img src="https://user-images.githubusercontent.com/82254221/181195262-bd1ca7bb-9788-4155-acb5-1e5d072436f4.png" width="640"/></a></p>
	<p><a href="https://discord.gg/H72KFXm"><img src="https://img.shields.io/static/v1?label=DISCORD&message=FakeYou&color=7289da&style=for-the-badge" alt="Discord" /></a> <a href="https://www.npmjs.com/package/fakeyou.js"><img src="https://img.shields.io/npm/v/fakeyou.js?label=NPM&color=red&style=for-the-badge" alt="NPM" /></a> <a href="https://github.com/leunamcrack/fakeyou.js"><img src="https://img.shields.io/github/license/leunamcrack/fakeyou.js?style=for-the-badge" alt="GITHUB" /></a>
	</p>
</div>

> **fakeyou.js is a powerful [Node.js](https://nodejs.org) module that allows you to interact with the [FakeYouAPI](https://docs.fakeyou.com) easily.**

## Features
* [Login or use your token](#login-or-use-your-token)
* [Search models](#search-models)
* [Make TTS requests](#make-tts-request)
* [LeaderBoard](#leaderboard)
* [Edit client user](#edit-client-user)
* [Get all data from an entity](#get-all-data-from-an-entity)

## Examples
### Login or use your token
```js
const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client({
    token: 'anOptionalSecretToken',
    usernameOrEmail: 'anOptionalCoolUsernameOrEmail',
    password: 'anOptionalSuperSecretPassword'
});
await fy.start(); //required
```

### Search models
```js
let models = fy.searchModel('mario');
models.first();
```

### Make TTS Request
```js
await fy.makeTTS('mario', 'A cool text to speech');
//or
let model = fy.searchModel('mario').first();
if(model) {
    await model.request('A cool text to speech');
}
```

### LeaderBoard
```js
let lb = await fy.leaderboard();
lb.getPosition(3, true);
```

### Edit client user
```js
await fy.user.edit({
    description: 'Another **random** user in FakeYou',
    twitter: null,
    github: 'a-cool-username',
    ttsVisibility: false
});
```

### Get all data from an entity
```js
await fy.models.fetch('TM:7wbtjphx8h8v');
//or
await fy.fetchUser('acoolusername');
//or
let result = fy.results.cache.get('TR:tn7gq96wg6httvnq91y4y9fka76nj');
if(result) {
    await result.fetch()
}
```

## Useful links
+ [Documentation](https://fakeyou.js.org) ([source](https://github.com/leunamcrack/fakeyou.js/tree/docs))
+ [GitHub repository](https://github.com/leunamcrack/fakeyou.js)
+ [NPM package](https://www.npmjs.com/package/fakeyou.js)
+ [FakeYou Discord server](https://discord.gg/H72KFXm)