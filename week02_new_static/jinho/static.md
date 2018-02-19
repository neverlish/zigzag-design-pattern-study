### static

- static
  - 클래스의 정적 메서드/프로퍼티
  - 인스턴스에 따라 달라지지 않는다

- 공개 static 멤버
  - 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다.
```
class Croquis {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  static work() {
    console.log(`출근!`)
  }
}

Croquis.launch = function () {
  console.log('@channel 🍚')
}

Croquis.prototype.callName = function() {
  return `${this.name}님`
}

const jinho = new Croquis('jinho', 'M')

typeof Croquis.callName === undefined // instance
typeof jinho.launch === undefined // static 
```

- 비공개 static 멤버
  - 동일한 생성자 함수로 생성된 객체들이 공유하는 멤버
  - 생성자 외부에서 접근 불가
