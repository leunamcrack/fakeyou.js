# User
> Represents a user on FakeYou

### Constructor
```js
new User(client, data);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| client     | [Client](./client.md)             | The client that instantiated this | No      |
| data       | [APIData](https://docs.fakeyou.com)      | The category data      | No       |

## Properties
### badges
**The badges for this user**
+ Return: [Badges](./badges.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### createdAt
**The date the user was created**
+ Return: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### createdTimestamp
**The timestamp in seconds the user was created**
+ Return: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### description
**The user description (markdown style)**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### displayName
**The user display name**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### gravatarHash
**The [Gravatar](https://gravatar.com) hash**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### links
**The social links this belongs to**
+ Return: [LinksData](../typeof/linksdata.md)

---

### partial
**Checks if has partial data**
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### token
**The user token**
+ Return: [UserToken](../typeof/token.md#usertoken)

---

### ttsVisibility
**The default TTS results visibility of the user**
+ Return: [Visibility](../typeof/visibility.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### username
**The username of the user**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### w2lVisibility
**The default W2L results visibility of the user**
+ Return: [Visibility](../typeof/visibility.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

## Methods
### fetch()
**Get all data about this user**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[User](./user.md)>

---

### gravatarURL()
**Obtains the URL of gravatar image**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### isVisible(isw2l)
**Checks if the category is visible to public**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| isw2l     | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)             | If you want to get w2l option | Yes      |
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### profileURL()
**Obtains the URL of FakeYou profile**
+ Return: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)