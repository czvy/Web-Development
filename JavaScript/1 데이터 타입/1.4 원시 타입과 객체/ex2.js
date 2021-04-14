let arr = [2, 3, 4];
let newArr = arr;

console.log(arr);
console.log(newArr);

arr[1] = 5;
console.log(arr);
console.log(newArr);
// 객체는 가변이므로 가르키는 값을 바꾸면 가르키는 값이 바뀐다.