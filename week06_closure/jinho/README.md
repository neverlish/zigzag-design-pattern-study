### 클로져 Closure
2018/03/14(수) - Jinho

---

### 클로저란
- 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의
- 내부 함수가 외부 함수의 맥락에 접근할 수 있는 것
- 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 '기억한다'.
- 함수 내의 변수를 내부함수가 참조하기 때문에 유지되어 접근할 수 있는 함수

---
### 내부함수
```js
function outter() {
  function inner() {
    var title = 'coding everybody';
    console.log(title);
  }
  inner();
}
outter();
```

```js
function outter() {
  var title = 'coding everybody';
  function inner() {
    console.log(title);
  }
  inner();
}
outter();
```
---

- 외부함수의 실행이 끝나서 외부 함수가 소멸된 후에도, 내부함수가 외부함수의 변수에 접근
```js
function outter() {
  var title = 'coding everybody';
  return function() {
    console.log(title);
  }
}
inner = outter();
inner();
```

---

- 각각의 함수가 고유의 범위를 가짐

```js
function multi(ratio){
	return function(input){
		return ratio * input;
	};
};
var doubleMulti = multi(2);
doubleMulti(2); // 4
var tripleMulti = multi(3);
tripleMulti(3); // 9
```

```js
function sequencer() {
  var s = 0;
  return function() {
    return ++s;
  }
}

var seq = sequencer();
console.log(seq());
console.log(seq());
console.log(seq());
```

---

- scope chain을 통해 내부 변수에 접근

```js
var counter = function() {
  var count = 0;
  function changeCount(number) {
    count += number;
  }
  return {
    increase: function() {
      changeCount(1);
    },
    decrease: function() {
      changeCount(-1);
    },
    show: function() {
      alert(count);
    }
  }
};
var counterClosure = counter();
counterClosure.increase();
counterClosure.show(); // 1
counterClosure.decrease();
counterClosure.show(); // 0
```
---

### 클로저를 통한 은닉화
```js
function Hello(name) {
  this._name = name;
}
Hello.prototype.say = function() {
  console.log('Hello, ' + this._name);
}
var hello1 = new Hello('A');
var hello2 = new Hello('B');
hello1.say(); // 'Hello, A'
hello2.say(); // 'Hello, B'
hello1._name = 'anonymous';
hello1.say(); // 'Hello, anonymous' : private 제한이 되지 않음
```

```js
function hello(name) {
  var _name = name;
  return function() {
    console.log('Hello, ' + _name);
  };
}
var hello1 = hello('A');
var hello2 = hello('B');
hello1(); // 'Hello, A'
hello2(); // 'Hello, B'
```

---

### 반복문 클로저

```js
var i;
for (i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i); // 10이 10번 출력
  }, 100);
}
```

```js
var i;
for (i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 100);
  })(i);
}
```

---

```js
var items = document.getElementsByTagName("li");
for(var i=0; i < items.length; i++) {
  console.log(i);
  items[i].onclick = function(event) {
    alert("My Sequence is " + (i+1)); // 자신의 순번 출력
  }
}
```

```js
var items = document.getElementsByTagName("li");
for(var i=0; i < items.length; i++) {    
  (function() {   // 새로운 스코프 선언
    var idx = i; // 클로저가 접근할 변수 선언
    items[i].onclick = function(event) {
      alert("My Sequence is " + (idx+1)); 
    }
  })();
}
```

---

### 클로저와 this

```js
window.name = "window";
var object = {
  name: "object",
  getName: function() {
    function findName() {
      return "my name is " + this.name;
    }
    return findName();
  }
}
object.getName(); // my name is window.
```

```js
window.name = "window";
var object = {
  name: "object",
  getName: function() {
    var that = this; // this를 따로 변수에 할당해둬 내부 함수가 접근 가능하도록 한다.
    function findName() {
      return "my name is " + that.name;
    }
    return findName();
  }
}
object.getName(); // my name is window.
```

---

### 성능 관련 고려사항

- 메소드는 객체 생성자에 정의하기 보다는 객체의 프로토타입에 연결해야 한다
  - 생성자가 호출될 때마다 메서드가 다시 할당되기 때문

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

---

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
```

---

### Conclusion
- 비공개 변수를 갖는 함수
- 함수에서 함수를 반환

### References
- [생활코딩 - Javascript - 클로저](https://opentutorials.org/course/743/6544)
- [Nonblock - 자바스크립트의 클로저(JavaScript's Closure)](http://blog.javarouka.me/2012/01/javascripts-closure.html)
- [DailyEngineering - Javascript 클로저(Closure)](https://hyunseob.github.io/2016/08/30/javascript-closure/)
- [ZeroCho - 실행 컨텍스트](https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0)
