​    

## 1.2 식별자 이름

변수와 상수, 함수 이름을 식별자(identifier)라고 부른다. 식별자에는 다음과 같은 규칙이 있다.

* 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작해야 한다.
* 식별자에는 글자와 숫자, 달러 기호, 밑줄만 쓸 수 있다.
* *π*와 같은 유니코드 문자도 쓸 수 있다.
* 예약어(let 등)은 식별자로 쓸 수 없다.


---

다른 언어에서는 달러 기호를 특수문자로 사용하지만 자바스크립트에서는 식별자 이름에 사용할 수 있다.

제이쿼리 같은 라이브러리는 이런 장점을 활용해 기호 자체를 식별자로 사용한다.

#### ex1)

```javascript
// Good
identifier
identifier10
_identifier
$identifier
Identifier
IDENTIFIER
identifierπ

// Bad
break
123identifier
has space 
```

​        