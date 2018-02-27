# Javascript Prototype이란?
- Author : [SeolHun](https://github.com/Seolhun/)

## Prototype Link와 Prototype Object
자바스크립트에는 Prototype Link 와 Prototype Object라는 것이 존재합니다. 그리고 이 둘을 통틀어 Prototype이라고 부릅니다. 프로토타입을 좀 안다는 것은 이 둘을 완벽히 이해하고 갖고 놀 수준이 되었다는 뜻입니다.

## 예제로 보는 특징.
#### 1. 메모리를 줄일 수 있다.(상속/재사용 할 수 있다.)
- Car 객체 생성시 마다 객체에 새 값으로 할당.
```typescript
function Car() {
	this.tire = 4;
	this.door = 4;
}
const matiz = new Car();
const avante = new Car();
console.log(`matiz.tire : ${matiz.tire}`)
console.log(`avante.door : ${avante.door}`)
```
- Car Prototype 객체에 할당하여 재사용.
```typescript
function Car() {}
Car.prototype.tire = 4;
Car.prototype.door = 4;

const matiz = new Car();
const avante = new Car();
console.log(`matiz.tire : ${matiz.tire}`)
console.log(`avante.door : ${avante.door}`)
```

#### 2. prototype 속성은 함수만 가지고있으며. __proto__는 모든 객체가 가지고 있다.
> 함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object도 같이 생성이 됩니다.
- 함수의 prototype
```typescript
function Car() {}
Car.prototype
```
- {…}
	- constructor: function Car()
	- __proto__: Object { … }
- 결론
	- prototype과 constructor(생성자), __proto__값을 모두 가지고 있음을 알 수 있다.

- 함수를 받은 객체의 prototype
```typescript
Car.prototype.name = "에쿠스"
var a = new Car()
a.name // "에쿠스"
a.prototype // undefined
a
```
- {}
	- __proto__: {…}
		- constructor: function Car()
		- name: "에쿠스"
		- __proto__: Object { … }
- 결론
	- 함수를 받은 객체도 `prototype은 없다`, __proto__만 있다.
	- __proto__ 객체의 이름이 `"에쿠스"`이다. 이 부분은 아래 3번과 일치된다.


#### 3. __proto__는 객체가 생성될 때 조상이었던 함수의 Prototype Object을 생성한다.
- Object.prototpye을 변경하지 않았을 때
```typescript
function Car() {}
Car.prototype
```
- {…}
	- constructor: function Car()
	- __proto__: Object { … }

- Object.prototype을 변경했을 때
```typescript
Object.prototype.name = "설훈"
function Car() {}
Car.prototype
```
- {…}
	- constructor: function Car()
		- arguments: null
		- caller: null
		- length: 0
		- name: "Car"
		- prototype: Object { … }
	- proto__: Object { name: "설훈", … }
- 결론
	- 함수도 Object 객체의 일부이기 때문에, 최상의 Object.prototype을 상속받는다.
	- 스코프의 객체 참조를 찾는 과정에서 최상단 혹은 전역변수 값을 참조하기 전에 해당 값을 찾는다면 해당 값을 참조한다.
		- Car.prototype과 Object.prototype을 모두 정의하면 `const a = new Car()`의 a는 Car > Object 순으로 값을 검색한다.

```typescript
var a = 3;
a.__proto__
a.name // 설훈
```
- Number
	- constructor: function Number()
	- toExponential: function toExponential()
	- ...
	- __proto__: Object { name: "설훈", … }
- 결론
	- 모든 객체는 Object의 일부이므로 __proto__에서 해당 객체를 가리킨다.


#### 4. __proto__속성을 통해 상위 프로토타입과 연결되어있는 형태를 Prototype Chain이라고 한다.
- 함수를 생성하면, prototpye도 같이 생성하여 prototype 객체를 통한 상속 및 재사용이 가능하다. 
- 3번에서도 알 수 있듯이, 모든 객체는 Object의 일부이기에 __proto__를 통해 Prototype Object의 값을 생성한다.
- 결론
	- 이러한 Prototype Chain 구조 때문에 모든 객체는 Object의 자식이라 할 수 있으며, Object Prototype Object에 있는 모든 속성을 사용할 수 있습니다. 
		- 예를 들면, toString 함수가 있다.
	
## Reference 
- [[Javascript] 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
- [Mozilla - Prototype에 대해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)