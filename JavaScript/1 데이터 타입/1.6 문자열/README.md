​    

## 1.6 문자열

자바스크립트 문자열은 유니코드(Unicode) 텍스트이다.

유니코드는 텍스트 데이터에 관한 표준이며, 사람이 사용하는 언어 대부분의 글자와 심볼에 해당하는 code point를 포함하고 있다. (여기서 말하는 언어에는 이모티콘 까지 포함된다)

유니코드 자체는 모든 언어의 텍스트를 나타낼 수 있지만 유니코드를 사용하는 소프트웨어가 모든 코드 포인트를 정확히 렌더링한다고 보장하지는 않는다.

자바스크립트의 문자열 리터럴에는 작은따옴표(''), 큰따옴표(""), 백틱(``)을 사용한다.

백틱은 ES6에서 도입한 것이며, 템플릿 문자열에서 사용한다.

---

### 1.6.1 이스케이프

텍스트로 만들어진 프로그램에서 텍스트 데이터를 사용할 때는 항상 텍스트 데이터와 프로그램 자체를 구별할 방법이 필요하다.

이 때 문자열을 따옴표 안에 쓰는 방법이 있다. 하지만 문자열 안에 따옴표를 써야 한다면 어떻게 해야 할까? 이 문제를 해결하려면 따옴표를 ***이스케이프***해서 문자열 주위에 쓰는 부호가 아님을 나타내야 한다.

다음 예제에는 이스케이프가 필요하지 않다.

#### ex1)

```javascript
const message1 = 'Sam looked up, and said "hello, friend!", as Max walked in';
const message2 = "Don't do that!";
```

message1은 작은따옴표로 감싸여 있으므로 문자열 안에 큰 따옴표를 걱정 없이 쓸 수 있다.

마찬가지로 message2는 큰 따옴표로 감싸 있으므로 문자열 안에 아포스트로피(')를 걱정없이 쓸 수 있다. 

***

하지만 아래와 같이 두 가지 따옴표를 모두 써야 하는 경우 에러가 발생한다.

#### ex2)

```javascript
// const message3 = "Sam looked up and said "don't do that!" to Max.";
// Error
```

message3 문자열에는 어떤 따옴표를 쓰더라도 에러가 생긴다. 

이 때, 역슬래시(\\)를 써서 따옴표를 ***이스케이프*** 하면 문자열이 여기서 끝나지 않았다고 자바스크립트에 알릴 수 있다.

```javascript
const message4 = "Sam looked up and said \"don't do that!\" to Max.";
const message5 = "Sam looked up and said \"don\'t do that!\" to Max.";
```

---

문자열에서 역슬래시 문자를 써야 할 때는 어떻게 할까?

역슬래시는 자기 자신을 이스케이프 할 수 있다.

#### ex3)

```javascript
const message6 = "In JavaScript, use \\ as an escape character in strings.";
```

​                                                       