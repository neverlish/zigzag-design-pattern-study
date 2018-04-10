### 프록시 패턴 Proxy Pattern
2018/04/11(수) - Jinho

---

### 프록시 패턴이란?

- 프록시는 대리인
  - 프록시는 내부적으로 실제의 객체에 접근할 때 호출되는 래퍼 혹은 대리 객체
  - 사용자가 원하는 행동을 하기 전에 한 번 거쳐가는 단계
  - 비용이 큰 작업을 줄이기 위해 하나로 묶거나, 필요할 때만 실행
  - 여러 행위들에 대해 사용자의 커스텀 동작을 정의할 때 사용
  - 통신에서의 프록시 : 클라이언트가 바로 서버에 접근하는 것이 아니라, 프록시를 통해 간접 접근(가상화, 캡슐화)

- 장점
  - 좋은 프록시는 사용자의 요청을 캐싱하여 성능을 높이거나 에러를 포착
  - 한 번에 여러 객체를 생성, 로드하는 것이 아니라 필요에 따라 로드
    - 여러 비디오가 있는 비디오에서 특정 이벤트가 주어졌을 때(예: 재생) 각 비디오의 객체를 생성하여 재생
  - 게으른 초기화
    - 객체 생성을 최대한 없애 브라우저의 실행 속도를 높임
  - 사용자가 다른 문제를 일으키지 않고 실체를 더 효율적으로 사용

- 단점
  - 나쁜 프록시는 사용자의 요청을 왜곡하여 다른 동작을 유도할 수도
  - 실제 객체가 생성되어 있다면 중복 작업이 됨

```js
function PhoneBook() {
  this.dictionary = {
    '현진호': '01012341234',
    '송신예': '01023456789',
    '윤상민': '01077777777'
  };
}
PhoneBook.prototype.get = function(name, callback) {
  var self = this;
  setTimeout(function() {
    callback(self.dictionary[name]);
  }, 3000);
}

function PhoneBookProxy() {
  var phoneBook = new PhoneBook();
  var viewCount = 0;
  return {
    get: function(name, callback) {
      viewCount++;
      phoneBook.get(name, callback);
    },
    getViewCount: function() {
      return viewCount;
    }
  };
}

function PhoneBookProxy2() {
  var phoneBook = new PhoneBook();
  var viewCount = 0;
  var cache = {};
  return {
    get: function(name, callback) {
      viewCount++;
      if (cache[name]) {
        callback(cache[name]);
      } else {
        phoneBook.get(name, function(number) {
          cache[name] = number;
          callback(number);
        });
      }
    },
    getViewCount: function() {
      return viewCount;
    }
  };
}
```

```js
var divControlPanel = document.getElementById("controlPanel");
var videoBunny = document.getElementById("videoBunny");
var proxyClickEventHandler = {
  "play" : function(){
    videoBunny.play();
  },
  "pause" : function(){
    videoBunny.pause();
  },
  "volumeUp" : function(){
    if(videoBunny.volume <= 0.9){
      videoBunny.volume += 0.1;
    } else {
      videoBunny.volume = 1;
    }	
  },
  "volumeDown" : function(){
    if(videoBunny.volume >= 0.1){
      videoBunny.volume -= 0.1;
    } else {
      videoBunny.volume = 0;
    }	
  }
};

divControlPanel.addEventListener("click",function(e){
  var target = e.target || e.srcElement;
  if(proxyClickEventHandler.hasOwnProperty(target.id)){
    proxyClickEventHandler[target.id].call();
  }
},true);
```

```js
var divControlPanel = document.getElementById("controlPanel");
var selectControlVideo = document.getElementById("controlVideo");

var controlVideo = {
  "play" : function(video){
    video.play();
  },
  "pause" : function(video){
    video.pause();
  },
  "volumeUp" : function(video){
    if (video.volume <= 0.9) {
      video.volume += 0.1;
    } else {
      video.volume = 1;
    }	
  },
  "volumeDown" : function(video){
    if (video.volume >= 0.1) {
      video.volume -= 0.1;
    } else {
      video.volume = 0;
    }	
  },
  "getVideoById" : function(id){
    return document.getElementById(id);
  }
}

proxyClickEventHandler = (function(){
  var cache = {};
  return function (command) {
    var video;
    if (controlVideo.hasOwnProperty(command)) {
      if (cache.hasOwnProperty(selectControlVideo.value)) {
        video = cache[selectControlVideo.value];
      } else {
        video = controlVideo.getVideoById(selectControlVideo.value);
        cache[selectControlVideo.value] = video;
      }
      controlVideo[command].call(this,video);
    }
  };
}());

divControlPanel.addEventListener("click", function (e) {
  var target = e.target || e.srcElement;
  proxyClickEventHandler(target.id);
},true);
```

```js
var p = new Proxy({}, {
  get: function(target, prop, receiver) {
    console.log('called: ' + prop);
    return target[prop];
  },
  set: function(target, prop, value, receiver) {
    console.log('called: ' + prop + ' = ' + value);
    target[prop] = value;
  }
});

console.log(p.a); // "called: a" / 10
p.a = 20;
console.log(p.a); // "called: a" / 20

```

### References
- [디자인 패턴(프록시, proxy) - ZeroCho](https://www.zerocho.com/category/JavaScript/post/57c0e816acce261700311c32)
- [JavaScript 프록시(Proxy) - DailyEngineering](https://hyunseob.github.io/2016/08/17/javascript-proxy/)
- [Javascript ES6 Proxy - Dev-Momo](http://dev-momo.tistory.com/entry/javascript-ES6-Proxy)
- [자바스크립트 디자인 패턴 #3. Proxy 패턴 - 살수다](http://frontierdev.tistory.com/34)
