# ModelManager
> Manage API models methods and holds their cache

### Constructor
```js
new ModelManager(client);
```

| PARAMETER  | TYPE                    | DESCRIPTION              | OPTIONAL |
|:----------:|:-----------------------:|:------------------------:|:--------:|
| client     | [Client](./client.md)   | The client managing this | No      |

## Properties
### cache
**The group of cached model items**
+ Type: [Group](./group.md) <[ModelToken](../typeof/modeltoken.md), [Model](./model.md)>

---

### client
**The client managing this**
+ Type: [Client](./client.md)

## Methods
### fetch(query)
**Get all data about a model**
| PARAMETER | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:---------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [ModelToken](./typeof/modeltoken.md) | The model token | No   |
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Model](./model.md)>

---

### resolve(query)
**Resolves a model data to a model object**
| PARAMETER | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:---------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [ModelResolvable](./typeof/modelresolvable.md) | The title, name or token of the model | No   |
+ Return: [Model](./model.md)