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