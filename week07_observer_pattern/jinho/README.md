### 옵저버 패턴 Observer Pattern
2018/04/06(목) - Jinho

### 옵저버 패턴이란
- 한객체의 상태가바뀌면 그 객체에 의존하는 다른 객체들한테 연락이 가고 자동으로 내용이 갱신되는 방식
  - 일대다(one-to-many) 의존성을 정의
- 어플리케이션의 한 부분이 변경되었을 때 다른 부분들도 같이 변경되어야 하는 경우
  - 객체 변경 시에 변경사항을 종속 객체에 알리기 위해 브로드캐스팅
- 객체간의 결합도를 느슨하게 함
  - 객체간의 결합도가 높을 수록 유지보수가 어려워짐

### 옵저버 패턴의 단점
- 옵저버 수가 증가하면서 성능에 저하됨


```js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribeObserver(observer) {
    this.observers.push(observer);
  }

  unsubscribeObserver(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  notifyObserver(observer) {
    const index = this.observers.indexOf(observer)
    this.observers[index].notify(index + 1);
  }

  notifyAllObservers() {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i].notify(i + 1);
    }
  }
}

class Observer {
  notify(index) {
    console.log(`Observer ${index} is notified`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2);

subject.notifyAllObservers();

```

```js
class Vespasianus {
  constructor() {
    this.subscribers = [];
  }

  publish() {
    var self = this;
    this.subscribers.forEach(function(subscriber) {
      subscriber.fire(self);
    });
  }

  register(target) {
    this.subscribers.push(target);
  };
}

class Mucianus {
  constructor() {
    this.list = [];
  }

  subscribe(target) {
    this.list.push({
      target: target,
      point: 0,
    });
    target.register(this);
  }

  unsubscribe(target) {
    this.list.splice(this.list.indexOf(target), 1);
  }

  fire(target) {
    this.list.forEach(function(person) {
      console.log('person.target:', person.target, ', target:', target, person.target === target);
    });
  };
}

const vespasianus = new Vespasianus();
const mucianus = new Mucianus();

mucianus.subscribe(vespasianus);
vespasianus.publish();
console.log(mucianus.list);

```

### References
- [KKD927 - 꼭 알아야하는 Javascript 디자인 패턴 4가지](https://kkd927.github.io/general/web/javascript/2017/04/12/4-JavaScript-Design-Patterns-You-Should-Know.html)
- [음 아마 비둘기보단 똑똑할거야 - [Javascript] 옵저버 패턴(Observer Pattern)](http://jundol.kr/2)
- [Mobile Convergence - [JavaScript] Design Pattern - Observer Pattern](http://mobicon.tistory.com/340)
