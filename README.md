<div align="center">
    <p><img src="https://user-images.githubusercontent.com/82254221/181195262-bd1ca7bb-9788-4155-acb5-1e5d072436f4.png" width="640"/></p>
	<p><a href="https://discord.gg/H72KFXm"><img src="https://img.shields.io/static/v1?label=DISCORD&message=FakeYou&color=7289da&style=for-the-badge" alt="Discord" /></a> <a href="https://www.npmjs.com/package/fakeyou.js"><img src="https://img.shields.io/npm/v/fakeyou.js?label=NPM&color=red&style=for-the-badge" alt="NPM" /></a> <a href="https://github.com/leunamcrack/fakeyou.js"><img src="https://img.shields.io/github/license/leunamcrack/fakeyou.js?style=for-the-badge" alt="GITHUB" /></a>
	</p>
</div>

> **FakeYou.JS is a powerful [Node.js](https://nodejs.org) module that allows you to interact with the [FakeYouAPI](https://docs.fakeyou.com) easily.**

### Features
* [Login or use your token](#login-or-use-your-token)
* [Search models](#search-models)
* [Make TTS requests](#make-tts-request)
* [LeaderBoard](#leaderboard)
* [Edit client user](#edit-client-user)
* [Get all data from an entity](#get-all-data-from-an-entity)

### Login or use your token
```js
const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client({
    token: 'anOptionalSecretToken',
    usernameOrEmail: 'aCoolUsernameOrEmail',
    password: 'aSuperSecretPassword'
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
    github: 'Another **random** user in FakeYou',
    github: 'a-cool-username',
    ttsVisibility: false
});
```

### Get all data from an entity
```js
await fy.models.fetch('TM:7wbtjphx8h8v');

await fy.fetchUser('acoolusername');

let result = fy.results.cache.get('TR:tn7gq96wg6httvnq91y4y9fka76nj');
if(result) {
    await result.fetch()
}
```

**Documentation coming soon...**
