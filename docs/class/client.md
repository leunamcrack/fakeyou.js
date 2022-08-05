# Client
> The main hub to interact with FakeYouAPI
::: danger IMPORTANT 
You need to forcely use **[start()](#start)** method to get important data from API and login if needed
:::
### Constructor
```js
new Client(options);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| options    | [ClientOptions](../typeof/clientoptions.md) | Options for the client | Yes   |

## Properties
### categories
**All of categories the client is currently handling**
+ Type: [VoiceManager](./categorymanager.md)

---

### models
**All of models the client is currently handling**
+ Type: [ModelManager](./modelmanager.md)

---

### isReady
**Checks if the client is ready to work**
+ Type: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### results
**All of results the client is currently handling**
+ Type: [VoiceManager](./resultmanager.md)

---

### token
**The authorization token for data request**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### user
**The user logged in**
+ Type: [ClientUser](./clientuser.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

## Methods
### fetchUser(query)
**Fetch all data about an user**
| PARAMETER | TYPE                                         | DESCRIPTION                 | OPTIONAL |
|:---------:|:--------------------------------------------:|:---------------------------:|:--------:|
| query     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Profile username  | No       |
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[User](./user.md)>

---

### leaderboard()
**Obtains the TTS/W2L leaderboard**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[LeaderBoard](./leaderboard.md)>

---

### makeTTS(model, text)
**Generate a TTS request**
| PARAMETER | TYPE                                         | DESCRIPTION                 | OPTIONAL |
|:---------:|:--------------------------------------------:|:---------------------------:|:--------:|
| model     | [ModelResolvable](../typeof/modelresolvable.md) | Name, object or token of model | No       |
| text      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text to speech | No |
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[TTSResult](./ttsresult.md)>

---

### queue()
**Get info about TTS queued**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[QueueInfo](../typeof/queueinfo.md)>

---

### searchModel(query)
**Search an model**
| PARAMETER | TYPE                                         | DESCRIPTION                 | OPTIONAL |
|:---------:|:--------------------------------------------:|:---------------------------:|:--------:|
| query     | [String](../typeof/modelresolvable.md) | The model name | No       |
+ Return: [Group](./group.md) <[ModelToken](../typeof/modeltoken.md), [Model](./model.md)> 

---

### start()
**Fetch all data and login if needed**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Client](./client)>