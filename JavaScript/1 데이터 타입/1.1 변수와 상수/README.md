## 1.1 변수와 상수

변수(Variable)이란 이름이 붙은 값으로, 변수라는 이름에 맞게 값은 언제든지 바뀔 수 있다.

예를 들어 온도를 다루는 프로그램을 만든다면 currentC라는 변수를 사용할 수 있다.

#### ex1)

```javascript
let currentC = 26;
// 섭씨온도
```

이 문장은 변수 currentC를 선언하고 초깃값을 할당하는 두 가지 일을 한다.

let은 변수 선언에만 쓰이며, 각 변수이름은 한 번만 선언 할 수 있다.



변수를 선언할 때 반드시 초기값을 지정해야 하는 건 아니다. 초기값을 지정하지 않으면 undefined가 할당된다.

#### ex2)

```javascript
let temp;
// let temp = undefined; 와 같다
```



let 문 하나에서 변수 여러 개를 선언할 수 있다.

#### ex3)

```javascript
let temp, room1 = "suite_room", room2 = "lobby";
```

temp는 값을 할당하지 않았으므로 암시적으로 undefined를 받고, room1은 선언과 동시에 "suite_room"을 할당했고, room2 역시 선언과 동시에 "lobby"를 할당했다. 

room1과 room2는 문자열 변수이다.



상수는 변수와 마찬가지로 값을 할당받을 수 있지만 한 번 할당한 값을 바꿀 수는 없다.

const 역시 상수 여러 개를 선언할 수 있다.

#### ex4)

```javascript
const MIN_TEMP = 0, MAX_TEMP = 30;
```

