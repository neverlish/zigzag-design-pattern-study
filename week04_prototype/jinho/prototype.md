### 프로토타입 Prototype
2018/02/26(수) - Jinho

---

- 자바스크립트의 모든 함수, class는 Object의 상속을 받는다.
  - 자바스크립트에서는 기본 데이터 타입을 제외한 모든 것이 객체
- 생성자로 호출되는 인스턴스도 객체다.

- 객체는 프로퍼티를 가질 수 있다. 이 중, prototype에 저장된 함수의 속성들은 생성자를 통해 객체가 만들어질 때 그 객체에 연결된다.

- javascript에서는 프로토타입을 이용해 상속과 비슷하게, 상위객체의 메서드, 프로퍼티를 사용할 수 있다.

---

### Prototype = Prototype object ++ prototype link

- Prototype object: 자신을 원형으로 만들어질 새로운 객체들의 속성을 담는 객체
  - 자바스크립트에서는 함수를 생성할 때 함수 자신과 연결된 프로토타입 객체를 동시에 생성하며 서로 prototype과 consturctor로 연결된다.
- Prototype link( `__proto__` ): 부모 객체의 prototype (prototype link)

---

### 프로토타입 활용 기본 예시

```javascript
function Person() {
  this.eyes = 2;
  this.nose = 1;
}
var kim  = new Person();
var park = new Person();
console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1
console.log(park.eyes); // => 2
console.log(park.nose); // => 1
```

```javascript
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
var kim  = new Person();
var park = new Person():
console.log(kim.eyes); // => 2
```

---

### 프로토타입 상속

```javascript
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);
```

* Super.prototype = Ultra.prototype 으로하면 안된다. Super.prototype의 값을 변경하면 그것이 Ultra.prototype도 변경하기 때문이다.

---

### 프로토타입을 활용한 메소드 상속

``` javascript
function Person (firstName) {
  this.firstName = firstName;
}

Person.prototype.walk = function(){ console.log("I am walking!"); };

Person.prototype.sayHello = function(){ console.log("Hello, I'm " + this.firstName); };

// Student
function Student(firstName, subject) {
  Person.call(this, firstName);
  this.subject = subject;
}

// Student.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

Student.prototype.sayGoodBye = function(){ console.log("Goodbye!")};
```

---

### 프로토타입을 활용한 프로퍼티 상속과 변경

```javascript
var a = {
    attr1: 'a1'
}

var b = {
    attr2: 'a2'
}

b.__proto__ = a;
b.attr1 // 'a1'

a.attr1 = 'a000'; // 상속받은 객체의 내용 변경
b.attr1 // 'a000'

a.attr3 = 'a3' // 상속받은 객체의 내용이 추가
b.attr3 // 'a3'

delete a.attr1 // 상속받은 객체의 내용이 삭제
b.attr1 // undefined
```

---

### __proto__ 활용

```javascript
var a = {
    attr1: 'a'
};

var b = {
    __proto__: a,
    attr2: 'b'
};

var c = {
    __proto__: b,
    attr3: 'c'
};

c.attr1 // 'a'
```

---

## Reference
- [생활코딩 - Javascript - prototype](https://opentutorials.org/course/743/6573)
- [bestalign's dev blog - Javascript 상속](https://bestalign.github.io/2015/08/02/JavaScript-Inheritance/)
- [오승환 - [Javascript ] 프로토타입 이해하기
](https://medium.com/@bluesh55/javascript-prototype-이해하기-f8e67c286b67)
