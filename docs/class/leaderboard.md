# LeaderBoard
> Represents a FakeYou leaderboard

### Constructor
```js
new LeaderBoard(client, data);
```

| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| client    | [Client](./client.md) | The client that instantiated this | No      |
| data | [APIData](https://docs.fakeyou.com) | The leaderboard API data | No |

## Properties
### client
**The client that instantiated this**
+ Type: [Client](./client.md)

---

### group
**The group of info this leaderboard has**
+ Type: [Group](./group.md) <[UserToken](../typeof/usertoken.md), [LeaderBoardItem](../typeof/leaderboarditem.md)>

## Methods
### getPosition(position, isw2l)
**Obtains an item based on its position in the leaderboard**
| PARAMETER  | TYPE                                     | DESCRIPTION            | OPTIONAL |
|:----------:|:----------------------------------------:|:----------------------:|:--------:|
| position     | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The position to get | No      |
| isw2l     | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the item is from w2l leaderboard | Yes      |
+ Return: [LeaderBoardItem](../typeof/leaderboarditem.md)

---

### tts()
**Gets the TTS leaderboard**
+ Return: [Group](./group.md) <[UserToken](../typeof/usertoken.md), [LeaderBoardItem](../typeof/leaderboarditem.md)>

---

### toArray()
**Generates an array that contains username and count info**
+ Return: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

---

### w2l()
**Gets the W2L leaderboard**
+ Return: [Group](./group.md) <[UserToken](../typeof/usertoken.md), [LeaderBoardItem](../typeof/leaderboarditem.md)>