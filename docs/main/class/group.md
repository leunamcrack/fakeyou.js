# Group
> An extended [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) with extra methods

### Constructor
```js
new Group();
```

## Methods
### every(function, arg)
**Checks if all items passes the function, equals to [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| function     | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | The function to test each item | No      |
| thisArg     | _Any_ | Value to use as `this` in the function | No      |
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### filter(fn)
**Find values an gets a group with found items, equals to [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| fn     | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | The function to evaluate | No      |
+ Return: [Group](./group.md) <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), _Any_>

---

### find(fn)
**Find values an gets the first found result, equals to [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| fn     | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | The function to evaluate | No      |
+ Return: _Any_

---

### first(count)
**Obtanis the first item(s) of the group**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| count     | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The amount of items | Yes      |
+ Return: _Any_ or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <_Any_>


---

### get(query)
**Gets a value from the group by its key, literally [Map.get()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The key | No      |
+ Return: _Any_

---

### has(query)
**Check if a key exist in the group, literally [Map.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| query     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The key | No      |
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### last(count)
**Obtanis the last item(s) of the group**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| count     | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The amount of items | Yes      |
+ Return: _Any_ or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <_Any_>

---

### map(fn, thisArg)
**Creates a new array with results of given function in each item, equals to [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| function     | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | The function to test each item | No      |
| thisArg     | _Any_ | Value to use as `this` in the function | No      |
+ Return: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <_Any_>

---

### some(function, arg)
**Checks if at least one item passes the function, equals to [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| function     | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | The function to test each item | No      |
| thisArg     | _Any_ | Value to use as `this` in the function | No      |
+ Return: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

### toArray()
**Generate an array of values of this group**
+ Return: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <_Any_>
