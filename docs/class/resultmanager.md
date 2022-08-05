# ResultManager
> Manage API results methods and holds their cache

### Constructor
```js
new ResultManager(client);
```

| PARAMETER  | TYPE                    | DESCRIPTION              | OPTIONAL |
|:----------:|:-----------------------:|:------------------------:|:--------:|
| client     | [Client](./client.md)   | The client managing this | No      |

## Properties
### cache
**The group of cached result items mapped by their tokens**
+ Type: [Group](./group.md) <[ResultToken](../typeof/resulttoken.md), [TTSResult](./ttsresult.md)>

---

### client
**The client managing this**
+ Type: [Client](./client.md)

## Methods
### fetch(query)
**Get all data about a model**
| PARAMETER | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:---------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [ResultToken](./typeof/resulttoken.md) | The result token | No   |
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[TTSResult](./ttsresult.md)>

---

### resolve(query)
**Resolves a model data to a model object**
| PARAMETER | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:---------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [ResultResolvable](./typeof/resultresolvable.md) | The text, token or audio path of the model | No   |
+ Return: [TTSResult](./ttsresult.md)