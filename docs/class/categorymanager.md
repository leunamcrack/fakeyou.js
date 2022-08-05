# CategoryManager
> Manage API categories methods and holds their cache

### Constructor
```js
new CategoryManager(client);
```

| PARAMETER  | TYPE                    | DESCRIPTION              | OPTIONAL |
|:----------:|:-----------------------:|:------------------------:|:--------:|
| client     | [Client](./client.md)   | The client managing this | No      |

## Properties
### cache
**The group of cached category items mapped by their tokens**
+ Type: [Group](./group.md) <[CategoryToken](../typeof/categorytoken.md), [Category](./category.md)>

---

### client
**The client managing this**
+ Type: [Client](./client.md)

## Methods
### fetch(query)
**Get all data about a category**
| PARAMETER | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:---------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [CategoryToken](./typeof/categorytoken.md) | The category token | No   |
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Category](./category.md)>

---

### resolve(query)
**Resolves a category data to a category object**
| PARAMETER | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:---------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [CategoryResolvable](./typeof/categoryresolvable.md) | The title, name or token of category | No   |
+ Return: [Category](./category.md)