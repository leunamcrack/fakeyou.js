## Getting Started
:::warning NOTE
Any entity can have partial data, so before performing any activity use the [fetch()](./getting-started.md 'method available in Category, Model, TTSResult and User objects') method to obtain all the information pertaining to the entity
:::
### First, create you client
```js
const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client(<ClientOptions>);
//Client
```

[ClientOptions](../typeof/clientoptions.md) are optional parameters to create a [Client](../class/client.md), you can leave it blank or add your data, either your credentials to login to a FakeYou account or your authorization token.

It's recommended to set account credentials, so that any generated [TTSResult](../class/ttsresult.md) will belong to that account and can be accessible later. The authorization token is given to users by the administrative staff of FakeYou from their [Discord server](https://discord.gg/H72KFXm) to bypass rate limiting as well as access your privately uploaded models.

### Now, go to start
```js
await fy.start()
```
The [start()](../class/client.md#start) method is **required** before performing any activity in fakeyou.js, technically what it does is to request to API the list of public [categories](../class/category.md) and [models](../class/model.md) and store them in cache, and login with the account credentials if they provided.

### Choose a model
```js
const model = fy.models.cache.get('TM:7wbtjphx8h8v');
//Model
```
```js
const searchedModels = fy.searchModel('mario');
//Search for models that include title "mario"
let model = searchedModels.first()
//Get the first value of [Group]
```
The list of models can be found in the [ModelManager](../class/modelmanager.md) cache, to choose a model just search for it by token, or use the [searchModel()](../class/client.md#searchmodelquery) method to search for it by title/name.

If you use the search model method, it will return a [Group](../class/group.md), an extended Map based on discord.js collection, just [find()](../class/group.md#findfn) the choosen one by other parameters like language, category parent or just uses [first()](../class/group.md#firstcount) method to get the first value

### Making your first TTS result
```js
const result = await model.request('A cool text to speech');
```
```js
const result = await fy.makeTTS(<ModelResolvable>, 'A cool text to speech');
//Shorcut method but inestable
```
You got your choosen model, now create your TTS result by giving it a text to make it "speech". Just use the [request()](../class/model.md#requesttext) method

Alternatively, the client has the [makeTTS()](../class/client.md#makettsmodel-text) shortcut method, just provide the [model resolvable](../typeof/modelresolvable.md) and text, but unfortunately, if you define the model title/name, you are not sure you will get the desired model.

### How can i get my result?
```js
result.audioURL();
//Get file audio URL
await result.getAudio();
//Buffer of wav audio
```
Congrats, you had been created your first request, to get the audio file just use [audioURL()](../class/ttsresult.md#audiourl) or the file buffer with [getAudio()](../class/ttsresult.md#getaudio), Also you can access to more data like text and model used, duration and size result, etc.

::: tip INFO
This is an example of the use of the package, you can use any of the methods and objects for your project, why don't we start with [Client](../class/client.md)?, the main hub of **fakeyou.js**
:::