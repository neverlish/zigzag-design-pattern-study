# JavaScript new, constructor란?
- Author : [SeolHun](https://github.com/Seolhun/)

## Goal
- `new` 생성자의 작동원리와 활용법 이해
- TypeScript와 JavaScript의 코드 차이를 이해한다.

## Overview
- 클래스에는 "constructor"라는 이름을 가진 특별한 메소드를 하나씩 가질 수 있습니다. 하나 이상의 생성자 메소드가 발견되면 SyntaxError 에러가 발생합니다.
- 생성자 메서드는 class를 상속받아 구현하였을 시, "super" 키워드를 사용하여 상위(상속) 클래스의 생성자 메소드를 호출할 수 있습니다.
- 만약 생성자 메소드를 저장하지 않을 경우, 기본 생성자 메소드가 사용됩니다.

## Content
- 사용자 정의 객체를 생성에는 두 단계가 필요하다.
    - 함수를 작성하여 객체 타입을 정의한다.
    - new 연산자로 객체의 인스턴스를 생성한다.
- 객체의 타입을 정의하기 위해, 객체의 이름과 속성을 명세하는 함수를 만든다. 객체는 그 자체가 또 다른 객체인 속성를 가질 수 있다.

- 코드 new Foo(...)가 실행될 때 다음과 같은 일이 발생한다.
    1. **Foo.prototype을 상속하는 새로운 객체가 하나 생성된다.**
    2. 명시된 인자 그리고 새롭게 생성된 객체에 바인드된 this와 함께 생성자 함수 Foo 가 호출된다. new Foo는 new Foo()와 동일한다. 즉 인자가 명시되지 않은 경우, 인자 없이 Foo가 호출된다.
    3. 생성자 함수에 의해 리턴된 객체는 전체 new호출 결과가 된다. 만약 생성자 함수가 명시적으로 객체를 리턴하지 않는 경우, 첫번째 단계에서 생성된 객체가 대신 사용된다.(일반적으로 생성자는 값을 리턴하지 않는다. 그러나, 일반적인 객체 생성을 재정의(override)하기 원한다면 그렇게 하도록 선택할 수 있다.)
- 이전에 정의된 객체에 속성을 항상 추가할 수 있다. 예를 들면, car1.color = "black" 구문은 color속성을 car1에 추가한다. 그리고 그 값을 "black" 할당한다. 그러나, 이것 이 다른 객체들에게는 전혀 영향을 주지 않는다. 동일한 타입의 모든 객체들에게 새로운 속성을 추가하려면, Car객체 타입의 정의에 이 속성을 추가해야한다.
- Function.prototype 속성을 사용하여 이전에 정의된 객체 타입에 공유 속성을 추가할 수 있다. 이것은 객체 타입의 인스턴스 하나에만 적용되는 것이 아니라 이 함수로 생성하는 모든 객체와 공유하는 속성을 정의한다.
- 다음의 코드는 car 타입의 모든 객체에 null값을 갖는 color 속성을 추가한다. 그리고 car1객체 인스턴스에서만 이 값을 문자열 "black"으로 덮어 쓴다. 더 많은 정보는 prototype을 본다.

## Examples
```javascript
function Car() {}
var car1 = new Car();
console.log(car1.color);    // undefined
Car.prototype.color = null;
console.log(car1.color);    // null
car1.color = "black";
console.log(car1.color);   // black
```

## Review
new에 대해서 공부를 하게 된 이유는, `Singleton Pattern`을 학습하다가, new를 통해 반환된 instance가 기존 instance와 다른 결과를 가져오는 것을 확인해서이다. 
이것이 이질적으로 느껴진 점은 Java에서의 Singleton은 해당 Instance가 생성되면 Singleton의 의미처럼, 해당 객체를 생성해도 이미 생성되어진 Instance를 반환하기 때문이다. 그래서 해당 결과 값이 같은 주소 값은 물론이며 값이 달라지지 않음을 보장해준다. 고민 끝에 내린 결론은, Java가 컴파일 언어의 특징을 갖고있기 때문이라고 생각한다. static으로 생성된 Singleton은 Java에서 해당 값이 컴파일 시 Stack의 메모리를 고정적으로 할당해준다. 하지만, JavaScript는 Compile언어가 아니므로, static으로 선언해도 해당 instance를 static으로 정적메모리를 할당해주지만, 생성자를 통해 해당 function을 다시 호출하면 생성과 초기화가 이루어져 기존의 값을 다른 주소값으로 반환해준다.

## References
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)