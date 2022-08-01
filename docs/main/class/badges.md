# Badges
> The list of badges of a user

### Constructor
```js
new Badges(client, user, data);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| client     | [Client](./client.md)                       | The client that instantiated this  | No       |
| user       | [User](./user.md) or [ClientUser](./clientuser.md) | The user this belongs to | No |
| data       | [APIData](https://docs.fakeyou.com) | The badges data | No        |

## Properties
### client
**The client that instantiated this**
+ Type: [Client](./client.md)

---

### group
**The group of badges this user has**
+ Type: [Group](./group.md) <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [BadgeInfo](../typeof/badgeinfo.md)>

---

### user
**The user this belongs to**
+ Type: [User](./user.md) or [ClientUser](./clientuser.md)

## Methods
### any(option)
**Checks if the user has a badge or any of the given badges**
| PARAMETER | TYPE | DESCRIPTION | OPTIONAL |
|:---------:|:---:|:----:|:-----:|
| option | [BadgeName](../typeof/badgename.md) or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) <[BadgeName](../typeof/badgename.md)> | The badge(s) for check | No |
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### has(option)
**Checks if the user has a badge or all the given badges**
| PARAMETER | TYPE | DESCRIPTION | OPTIONAL |
|:---------:|:---:|:----:|:-----:|
| option | [BadgeName](../typeof/badgename.md) or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) <[BadgeName](../typeof/badgename.md)> | The badge(s) for check | No |
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### toArray()
**Converts this object to an array of strings**
+ Return: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) <[BadgeName](../typeof/badgename.md)>