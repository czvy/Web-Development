​    

## 1.4 원시 타입과 객체

자바스크립트의 값은 원시 값(primitive) 또는 객체(object)이다.

문자열과 숫자 같은 원시타입은 불변이다. 숫자 5는 항상 5이며, 문자열 "alpha"도 항상 문자열 "alpha"이다.

예를 들어 "alpha" + "omega" 처럼 문자열을 병합한다면 같은 문자열을 수정 했을 뿐이라고 생각하기 쉬운데, 이것은 서로 다른 문자열이다.

원시 타입에는 여섯가지가 있다.

- 숫자
- 문자열
- 불리언
- null
- undefined
- 심볼(Symbol)

불변성이라는 말이 변수의 값이 바뀔 수 없다는 말은 아니다.

#### ex1)

```javascript
let str = "hello";
console.log(str);

str = "world";
console.log(str);
// hello와 world는 다른 문자열이다.

let string = "hello";
let newString = string;
console.log(string);
console.log(newString);

string = "world";
console.log(string);
console.log(newString);
// 원시 타입은 불변이므로 가르키는 값을 바꾸면 새로운 값을 가르키게 된다.
```

str은 불변 값 "hello"로 초기화 됐고, 다시 새로운 불변 값 "world"를 할당 받았다.

"hello"와 "world"는 서로 다른 문자열이다. 바뀐 것은 str이 저장하는 값 뿐이다.

***

위 여섯 가지 원시 타입 외에는 객체가 있다. 원시 값과 달리 객체는 여러 가지 형태와 값을 가질 수 있다.

- Array
- Date
- RegExp
- Map과 WeakMap
- Set과 WeakSet

#### ex2)

```javascript
let arr = [2, 3, 4];
let newArr = arr;

console.log(arr);
console.log(newArr);

arr[1] = 5;
console.log(arr);
console.log(newArr);
// 객체는 가변이므로 가르키는 값을 바꾸면 가르키는 값이 바뀐다.
```

---

원시 타입 중 숫자와 문자열, 불리언에는 각각 대응하는 객체 타입인 Number, String, Boolean이 있다.

이들 대응하는 객체에 실제 값이 저장되지는 않는다. 

이들은 대응하는 원시 값에 기능을 제공하는 역할을 한다.