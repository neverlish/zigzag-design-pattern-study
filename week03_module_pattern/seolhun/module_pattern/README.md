
# Module Pattern이란?
- Author : [SeolHun](https://github.com/Seolhun/)

## Intro
모듈 패턴은 전통적인 소프트웨어 공학에서 클래스 사용에 **private 과 public 으로 나뉜 캡슐화를 제공하는 방법**입니다.
자바스크립트에서의 모듈 패턴은 전역 영역에서 특정 변수영역을 보호하기 위해 단일 객체 안의 public/private의 변수를 포함할 수 있는 각 클래스 형식의 개념을 구현하는데 사용됩니다.
이 패턴으로 추가적인 자바스크립트 객체가 다른 스크립트의 객체와 충돌하는 것을 줄여줄 수 있습니다.

#### 자바스크립트에서 모듈 패턴을 구현하는 방법
- Object literal notation
```typescript
const Module = {
    first: first,
    name: name,
}
```
- AMD modules
- CommonJS modules
- ECMAScript Harmony modules

## Examples
#### TypeScript
- Before Module Pattern
    - module pattern을 사용하지 않으면 해당 객체가 모두 전역에서 인스턴스화 되어 다른 코드와 충돌 가능성이 높아집니다.
    - 객체 간의 연관성을 알기 어려워 코드관리가 어려우며 재사용성이 떨어집니다.
```typescript
const count = 3
const publicMethod = function () {
    console.log('Public Method : ', count);
}
const publicMethod2 = function () {
    console.log('Public Method2 : ', count);
}
publicMethod();
publicMethod2();
```

- After Module Pattern
    - 은닉화, 다형성, 상속을 통해 객체지향적으로 코드를 구성할 수 있습니다.
```typescript
class Module {
    private count: number = 3
    private privateMethod() {
        console.log('Private Method : ', this.count);
    }
    publicMethod() {
        console.log('Public Method : ', this.count);
    }
    public publicMethod2() {
        console.log('Public Method2 : ', this.count);
    }
}
const mod = new Module();
// mod.privateMethod(); // coudn't access
mod.publicMethod();
mod.publicMethod2();
```

#### Prototype 맛 보기
```javascript
function Module() {}
Module.prototype.count = 3;
Module.prototype
constructor: function Module()
count: 3
__proto__: {
    __defineGetter__: function __defineGetter__()
    __defineSetter__: function __defineSetter__()
    __lookupGetter__: function __lookupGetter__()
    __lookupSetter__: function __lookupSetter__()
    constructor: function Object()
    hasOwnProperty: function hasOwnProperty()
    isPrototypeOf: function isPrototypeOf()
    propertyIsEnumerable: function propertyIsEnumerable()
    toLocaleString: function toLocaleString()
    toSource: function toSource()
    toString: function toString()
    valueOf: function valueOf()
}
```
1. **prototype 속성은 함수만 가지고 있던 것과는 달리(Module.prototype)**, __proto__속성은 모든 객체가 가지고 있는 속성입니다.
```typescript
const a = 3 
a // 3
a.prototype //undefined
```
2. __proto__는 객체가 생성될 때 조상이었던 함수의 Prototype Object를 가리킵니다.


## Review
- class를 생성하면 해당 메소드는 Module 객체에 prototype으로 메소드가 생성됩니다.
    - Prototype Object는 일반적인 객체이므로 속성을 마음대로 추가/삭제 할 수 있습니다.
- class를 사용하면 클로저 원리를 통해 private 객체에 참조하여 값을 사용 할 수 있습니다.
- class를 통해 해당 module pattern을 적용한다면 function 안에 데이터의 접근을 제한함(은닉화)으로서 좀 더 객체지향적인 코드를 만들 수 있습니다.
- class == module과 같은 개념으로 사용되며, 해당 익명함수를 1개의 객체에 생성하여 사용할 수 있기 때문에 객체의 이름 충돌을 줄일 수 있습니다.

## Etc
#### Javascript
1. Javascript는 public/private 같은 접근제한자를 제공해주지 않기 때문에 해당 함수 안에서 return을 통해 접근제한을 시킬 수 있습니다.

2. 익명함수가 자동호출되며 해당 객체를 Module 객체를 받아 사용할 수 있습니다. 
    - 함수 안에 return 되지 않은 객체에도 접근이 가능하기 떄문에 클로저의 특징도 가지고 있습니다.
    - 익명함수 객체를 자동으로 받아 사용하기 때문에 Singleton 패턴의 특징도 가지고 있습니다.
```javascript
var Module = (function () {
    var count = 3;
    var _privateMethod = function () {
        console.log('Private Method : ', count);
    };
    var publicMethod = function () {
        console.log('Public Method : ', count);
    };
    var publicMethod2 = function () {
        console.log('Public Method2 : ', count);
    };
    return {
        publicMethod: publicMethod,
        publicMethod2: publicMethod2
    };
})();
Module.publicMethod();
Module.publicMethod2();
```

3. 자동 호출 구조를 없애서 사용하면 해당 함수를 통해 여러개의 인스턴스를 생성하여 사용할 수 있습니다.
```javascript
var Module = function () {
    var count = 3;
    var _privateMethod = function () {
        console.log('Private Method : ', count);
    };
    var publicMethod = function () {
        console.log('Public Method : ', count);
    };
    var publicMethod2 = function () {
        console.log('Public Method2 : ', count);
    };
    return {
        publicMethod: publicMethod,
        publicMethod2: publicMethod2
    };
};
var a = new Module();
var b = new Module();
a.publicMethod();
a.publicMethod2();
b.publicMethod();
b.publicMethod2();
```

## Reference 
- [Mastering Module Pattern](https://toddmotto.com/mastering-the-module-pattern/)
- [Javascript Prototype](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
