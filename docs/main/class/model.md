# Model
> Represents a FakeYou TTS model

### Constructor
```js
new Model(client, data);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| client    | [Client](./client.md) | The client that instantiated this | No      |
| data | [APIData](https://docs.fakeyou.com) | The model API data | No |

## Properties
### algorithm
**The algorithm type used in the model**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### category
**The category group in which the model is located**
+ Type: [Group](./group.md) <[CategoryToken](../typeof/token.md#categorytoken), [Category](./category.md)> or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### categoryTokens
**The list of category tokens in which the model is located**
+ Type: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) <[CategoryToken](../typeof/token.md#categorytoken)> or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### client
**The client that instantiated this**
+ Type: [Client](./client.md)

---

### count
**The count of generated requests by the model**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### createdAt
**The date this model was created**
+ Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### createdTimestamp
**The time in seconds this model was created**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### description
**The model description (markdown style)**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### features
**The model featured info**
+ Type: [ModelFeatures](../typeof/modelfeatures.md)

---

### lang
**The [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### locate
**The [IEFT BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### name
**A maybe suggested name for use in apps**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### partial
**Checks if has partial data**
+ Type: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### pipeline
**The model text pipeline type**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### setVisibility
**The visibility of the model**
+ Type: [Visibility](../typeof/visibility.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### title
**The title of the model**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### token
**The model token**
+ Type: [ModelToken](../typeof/modeltoken.md)

---

### type
**The type of the model**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### updatedAt
**The date this model was updated**
+ Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### updatedTimestamp
**The time in seconds this model was updated**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### user
**The user who created the model**
+ Type: [User](./user.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### userToken
**The user token who created the model**
+ Type: [UserToken](../typeof/usertoken.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### vocoder
**The model's default pretrained vocoder**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

## Methods
### fetch()
**Get all data about this model**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Model](./model.md)>

---

### isVisible()
**Checks if the category is visible to public**
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### modelURL()
**Obtains the URL of FakeYou model page**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### request(text)
**Make a TTS request**
| PARAMETER  | TYPE                                     | DESCRIPTION          | OPTIONAL |
|:----------:|:----------------------------------------:|:--------------------:|:--------:|
| text    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text to speech   | No   |
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[TTSResult](./ttsresult.md)>
