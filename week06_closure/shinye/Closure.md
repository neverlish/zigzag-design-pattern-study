# Closure in JS

### 클로져란?

> Closures are functions that refer to independent (free) variables 
> (variables that are used locally, but defined in an enclosing scope). In
>  other words, these functions 'remember' the environment in which they 
> were created.

즉, 생성될 당시의 환경 (스코프체인) 을 기억하는 함수를 말한다. 

- 스코프체인을 통해 접근 할 수 있는 변수나 함수가, 스코프가 해제되어야 할 시점에도 `사라지지 않는다` 는 말이다.
- 이런 스코프는 객체가 갖는 성질인 캡슐화와 은닉화를 구현하는데 사용될 수 있다


본래 ECMAScript의 언어 명세에는 클로저에 대한 직접적인 명시는 없다. (클로저는 프로그래밍적 개념..) 대신 자바스크립트는 클로저를 이용하여 스코프적 특징과 일급 객체로서의 함수에 대한 명세를 구현한 것.

![](https://cloud.githubusercontent.com/assets/12269563/15813143/68e63fac-2bf7-11e6-958c-6d26dd912a4d.png)

종합하면,

```
클로져 = 함수 + 함수를 둘러싼 환경 (Lexical environment)
```

함수를 둘러싼 환경이라는것이 바로 렉시컬 스코프이다. 함수를 만들고, 그 함수 내부의 코드가 탐색하는 스코프를 함수 생성 당시의 렉시컬 스코프로 고정하면 바로 클로저가 되는것이다.

정리하자면,<br>자바스크립트에서 클로저는 함수가 생성되는 시점에 생성된다는 말은 즉, 함수가 생성될 때 그 함수의 렉시컬 환경을 포섭(closure)하여 실행될 때 이용된다는 뜻이다.



// 예시 스샷 넣기



```javascript
var color = 'red';

function foo() {
    var color = 'blue'; // 2
    function bar() {
        console.log(color); // 1
    }
    return bar;
}

var baz = foo(); // 3
baz(); // 4
```

1. `bar`는 `color`를 찾아 출력하는 함수로 정의되었다.
2. 그리고 `bar`는 outer environment 참조로 foo의 environment를 저장하였다.
3. `bar`를 `global`의 `baz`란 이름으로 데려왔다.
4. `global`에서 `baz(=bar)`를 호출했다.
5. `bar`는 자신의 스코프에서 `color`를 찾는다.
6. 없다. 자신의 outer environment 참조를 찾아간다.
7. outer environment인 foo의 스코프를 뒤진다. `color`를 찾았다. 값은 `blue`이다.
8. 때문에 `blue`가 출력된다.

중요한 부분은 2~4번, 그리고 7번이다. **bar는 자신이 생성된 렉시컬 스코프에서 벗어나 global에서 baz라는 이름으로 호출이 되었고, 스코프 탐색은 현재 실행 스택과 관련 없는 foo를 거쳐 갔다.** `baz`를 `bar`로 초기화 할 때는 이미 `bar`의 `outer lexical environment`를 `foo`로 결정한 이후이다. 때문에, `bar`의 생성과 직접적인 관련이 없는 `global`에서 아무리 호출하더라도 여전히 `foo`에서 `color`를 찾는 것이다. 이런 `bar(또는 baz)`와 같은 함수를 우리는 클로저라고 부른다.



![](https://cloud.githubusercontent.com/assets/12269563/15634093/96894122-25f6-11e6-909e-66f5acb5dedb.png)

여기에서 다시한번 강조하지만 JS의 스코프는 렉시컬 스코프, 즉 이름의 범위는 소스코드가 작성된 그 문맥에서 바로 결정되는 것이다.

추가로, `foo`의 렉시컬환경 인스턴스는 `foo();`수행이 끝난 이후 GC가 회수해야 하는데 사실을 그렇지 않다. 앞에 설명했듯 `bar`는 여전히 바깥 렉시컬 환경인 `foo`의 렉시컬 환경을 계속 참조하고있고, 이 `bar`는 `baz`가 여전히 참조하고 있기 때문이다.(`baz(=bar) -> foo`)