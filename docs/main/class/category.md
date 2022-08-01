# Category
> Represents a category on FakeYou

### Constructor
```js
new Category(client, data);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| client    | [Client](./client.md) | The client that instantiated this | No      |
| data | [APIData](https://docs.fakeyou.com) | The category API data | No |

## Properties
### client
**The client that instantiated this**
+ Type: [Client](./client.md)

---

### createdAt
**The date the category was created**
+ Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### createdTimestamp
**The timestamp in seconds the category was created**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### features
**The data about features this category has**
+ Type: [CategoryFeatures](../typeof/categoryfeatures.md)

---

### models
**The group of models this belongs to**
+ Type: [Group](./group.md) <[ModelToken](../typeof/token#modeltoken), [Model](./model.md)>

---

### name
**An alternative title if is contextually different**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### partial
**Checks if has partial data**
+ Type: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### subCategories
**The group of children categories this belongs to**
+ Type: [Group](./group.md) <[CategoryToken](../typeof/token#categorytoken), [Category](./category.md)>

---

### superCategory
**The parent category in which this category is located**
+ Type: [Category](./category.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### superCategoryToken
**The parent category token in which this category is located**
+ Type: [CategoryToken](../typeof/categorytoken.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### token
**The category token**
+ Type: [CategoryToken](../typeof/categorytoken.md)

---

### type
**The type of this category**
+ Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### updatedAt
**The date that category was last updated**
+ Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### updatedTimestamp
**The timestamp in seconds the category was last updated**
+ Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### user
**The user was created the category**
+ Type: [User](./user.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

---

### userToken
**The user token was created the category**
+ Type: [UserToken](../typeof/usertoken.md) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

## Methods
### isSuperCategory()
**Checks if is a super category**
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### isSubCategory()
**Checks if is a sub category (has parent)**
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### fetch()
**Get all data about this category**
+ Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) <[Category](./category.md)>