# Observer Pattern

### 옵저버 패턴?

한 객체의 상태가 바뀌면, 그 객체에 의존하는 다른 객체들의 상태가 자동으로 갱신되는 일:다 패턴이다.

> '한 객체의 상태가 바뀌면, 그 객체가 의존하는 다른객체들(옵저버)에게 연락이 간다'<br>'출판사가 주체라면, 구독자는 옵저버가 된다'

옵저버 패턴은, 옵저버들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다.



### Javascript의 경우?

대표적으로 흔히 쓰는 옵저버 패턴에는 `이벤트 리스너` 를 예로 들 수 있다.

onClick의 경우, 평소에는 가만히 있다가 해당 버튼이 클릭되었을 때 그 이벤트를 알려달라고 리스너를 등록하는 것이다. 특정 인스턴스에 이벤트 리스너(EventListener)를 달고 대기하고 있다가 그 인스턴스에 이벤트가 발생하면 그 결과를 통보(Notify)받는 방식이라고 한다.

더 나아가, 자바스크립트에서 비동기 이벤트 처리를 가능하게 해주는 `이벤트 루프` 도 옵저버 패턴을 기반으로 만들어진 것이다.

![](https://velopert.com/wp-content/uploads/2016/02/ff.png)

이벤트 루프가 돌아가면서 이벤트의 실행 여부를 계속해서 체크 '현재 실행중인 태스크가 없는지'와 '태스크 큐에 태스크가 있는지'를 반복적으로 확인하는 것이다.



### Reactive Programming 과 옵저버 패턴?

> Reactive programming is the general paradigm behind easily propagating changes through the execution of a program. It's not a specific pattern or entity per-se, it's an idea, or style of programming. It's the concept that when `x` changes in one location, the things that depend on the value of `x` are recalculated and updated in various other locations with a minimum of fuss.
>
> The observer pattern (at least in object oriented languages) is a common method for providing a "trigger" to allow information to be updated whenever such a change is made (or, in more common OO terms, when an "event" is fired.) In that sense, it provides a *mechanism* for allowing the concept of reactive programming to happen in OO (and sometimes other) style languages.

