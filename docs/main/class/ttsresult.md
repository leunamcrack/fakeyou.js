## TTSResult
> Represent a TTS result from FakeYou

### Constructor
```js
new Model(client, data);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| client    | [Client](./client.md) | The client that instantiated this | No      |
| data | [APIData](https://docs.fakeyou.com) | The result API data     | No    |

## Properties
### attemps
**The attempts that were generated to make this result**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

---

### audioPath
**The audio file path of this user**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### client
**The client that instantiated this**
+ Type: [Client](./client.md)

---

### createdAt
**The date this result was created**
+ Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### createdTimestamp
**The time in seconds this result was created**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### duration
**The duration in milliseconds of this result**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### model
**The model that was used to create it**
+ Type: [Model](./model.md)

---

### modelToken
**The model token that was used to create it**
+ Type: [ModelToken](../typeof/modeltoken.md)

---

### partial
**Checks if has partial data**
+ Type: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### setVisibility
**The visibility of the result**
+ Type: [Visibility](../typeof/visibility.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)


---

### spectrogramPath
**The spectrogram file path of the result**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### size
**The audio size of this result**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### text
**The text that was used to generate the audio**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### token
**The result token**
+ Type: [ResultToken](../typeof/resulttoken.md)

---

### type
**The type of the result, equals to "tts"**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### updatedAt
**The date this result was updated**
+ Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### updatedTimestamp
**The time in seconds this result was updated**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### vocoder
**The maybe pretrained vocoder used in the result**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### worker
**The worker who generated it**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

### Methods
### audioURL()
**The URL of audio file**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### fetch()
**Get all data about this model**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[TTSResult](./ttsresult.md)>

---

### getAudio()
**Get the wav audio file**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Buffer](https://nodejs.org/api/buffer.html)>

---

### getSpectrogram()
**Get the json spectrogram file**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Spectrogram](../typeof/spectrogram.md)>

---

### resultURL()
**The URL of the result**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### spectrogramURL()
**The URL of spectrogram file**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### isVisible()
**Checks if the category is visible to public**
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---