## 스코프 Scope
2018/03/07(수) - Jinho

---
<!-- page_number: true -->

### 스코프란

- 변수에의 접근성과 생존기간
- 변수가 가지고 있는 참조범위
  - 변수는 선언 위치에 의해 스코프를 가진다

### 스코프의 종류

- 전역 스코프 : 코드 어디에서든 참조
  - 전역 변수 : 전역 스코프를 갖는 변수
- 지역 스코프 : 정의된 함수 내에서만 참조
  - 지역 변수 : 지역 스코프를 갖는 변수

---

- 지역 변수 x가 있는 경우
```js
var x = 'global';
function ex() {
  var x = 'local';
  x = 'change';
}
ex(); // x를 바꿔본다.
alert(x); // 여전히 'global'
```

- 지역 변수 x가 없는 경우
```js
var x = 'global';
function ex() {
  x = 'change';
}
ex();
alert(x); // 'change'
```
---

### 스코프 사용 핵심 원리
- 변수는 함수 단위로 관리
- 실행 시의 변수 검색엔 렉시컬 영역(함수 내 정의 환경)을 기준으로 함
- 실행 시의 변수 검색은 변수 스코프 체인을 이용

---

- 자바 스크립트는 블록 레벨 스코프를 사용하지 않는다
```js
if (true) {
  var x = 5; // The scope is inside the if-block
}
console.log(x);
```

---

### 호이스팅
- 보통의 언어에서는 변수는 사용 직전에 선언
- 자바스크립트에서는 함수의 시작 부분에서 벼너수를 모두 선언하는 것을 선호
  - 호이스팅에 의한 혼란 방지
```js
var foo = function () {
    var a = 3, b = 5;
    
    var bar = function () {
        var b = 7, c = 11;
        // 2) a === 3, b === 7, c === 11
        a += b + c;
        // 3) a === 21, b === 7, c === 11
    };
    
    // 1) a === 3, b === 5
    bar();
    // 4) a === 21, b === 5
};
```

---

### 렉시컬 스코핑

- 스코프는 함수를 호출할 때가 아니라 선언할 때 생성.
```js
var name = 'zero';
function log() {
  console.log(name);
}
function wrapper() {
  name = 'nero';
  log(); // nero
}
wrapper();
```

```js
var name = 'zero';
function log() {
  console.log(name);
}
function wrapper() {
  var name = 'nero';
  log(); /// zero
}
wrapper();
```

---

```js
var value = 'value1';

function printValue() { 
  return value; 
}

function printFunc(func) {
  var value = 'value2';
  console.log(func())
}
printFunc(printValue)
```

---

### 스코프 체인
- 스코프 체인 = 현재 실행 컨텍스트의 변수 객체 + 상위 컨텍스트의 스코프 체인
- 내부 함수에서는 외부 함수의 변수에 접근 가능
- 외부 함수에서는 내부 함수의 변수에 접근 불가

```js
var name = 'zero';
function outer() {
  console.log('외부', name);
  function inner() {
    var enemy = 'nero';
    console.log('내부', name);
  }
  inner();
}
outer();
console.log(enemy); // undefined
```

---

### let keyword
- 기존 스코프는 함수 레벨에서만 선언
- let을 이용하면 블록 레벨에서도 선언 가능

```js
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
```

---

### 암묵적 전역
- 상위 지역에 변수가 없으면 해당 변수를 암묵적으로 전역변수로 선언

```js
function foo() {
  x = 1;   // Throws a ReferenceError in "use strict" mode
  var y = 2;
}

foo();

console.log(x); // 1
console.log(y); // ReferenceError: y is not defined
```

---
### Reference
- [Zerocho: 함수의 범위](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)
- [PoiemaWeb: Javascript Scope](http://poiemaweb.com/js-scope)
- [JSPark: 자바스크립트(javascript) 변수 스코프](http://jusungpark.tistory.com/32)
