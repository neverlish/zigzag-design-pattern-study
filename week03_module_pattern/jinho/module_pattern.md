## 모듈 패턴 Module Pattern
2018/02/19(수) - Jinho

---
<!-- page_number: true -->

## 모듈 패턴이란
- 모듈 패턴은 전통적인 소프트웨어 공학에서 클래스 사용에 private 과 public 으로 나뉜 캡슐화를 제공하는 방법이다. 
- 자바스크립트에서의 모듈 패턴은 전역 영역에서 특정 변수영역을 보호하기 위해 단일 객체 안의 public/private의 변수를 포함할 수 있는 각 클래스 형식의 개념을 구현하는데 사용된다. 
- 이 패턴으로 당신이 페이지에 추가한 추가적인 자바스크립트가 다른 스크립트와 이름이 충돌하는 것을 줄여줄 수 있다.
- ***로직을 캡슐화, 전역 공간의 남발을 방지***

- 캡슐화 : 관련있는 멤버 변수와 메소드를 클래스와 같은 하나의 틀 안에 담고 외부에 공개될 필요가 없는 정보는 숨기는 것

---

### 자바스크립트에서 모듈 패턴을 구현하는 방법

- Object literal notation
- AMD modules
- CommonJS modules
- ECMAScript Harmony modules

---

```
var person = function (personInfo) {
  var o = personInfo;

  return {
    getPersonInfo: function() {
      return o;
    }
  };
};

var me = person({ name: 'Lee', gender: 'male' });

var myInfo = me.getPersonInfo();
console.log('myInfo: ', myInfo); 
// myInfo:  { name: 'Lee', gender: 'male' }

myInfo.name = 'Kim';

myInfo = me.getPersonInfo();
console.log('myInfo: ', myInfo); 
// myInfo:  { name: 'Kim', gender: 'male' }
```

-----

```
var jinho = {
  first: 'jinho', last: 'hyeon', 
  job: 'developer'
};

var info = (function(info) {
  var fullName = info.first + ' ' + info.last;
  var being = 'human';

  var getName = function() { 
    return fullName;
  }

  return { 
    name: getName, 
    being: being
  }
})(jinho);

console.log(info.fullName); // undefined
console.log(info.name()); // jinho hyeon
console.log(info.being); // being
```

---

var app = app || {};
app.module = (function() {
  var count = 0;
  return {
    increase: function() {
      return ++count;
    },
    decrease: function() {
      return --count;
    }
  }
})();
console.log(app.module.increase()); // 1
console.log(app.module.decrease()); // 0

---

### 익명함수 내부에서 전역변수를 사용하는 방법

```
(function($) {
    console.log($);
}(jQuery));
```

- 지역함수로 가져와서 사용하면, 전역함수를 그대로 사용할때보다 탐색 속도가 빨라진다.
