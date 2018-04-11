# Proxy Pattern

```
Proxy is a way to wrap an object to intercept its basic operations, like getting a property value. We can provide a handler object with traps for the operations we want to intercept. The operations we don't define a trap for will be forwarded to the original object.
```

```
A proxy is an object that has the same interface as another object and is used in place of that other object. It provides a surrogate or placeholder for another object to control access to it. It intends to add a wrapper and delegation to protect the real component from undue complexity.
```

프록시는 일반적으로 다른 어떤 클래스의 인터페이스로 동작하는 클래스이다. 내부적으로 실제의 객체(real subject)에 접근할 때 호출되는 래퍼(wrapper) 혹은 대리 객체라고 볼 수 있다.

프록시는 객체에게 할 수 있는 기본 작업, 예를들면 속성 조회, 할당, 열거, 함수 호출등에 대한 행위에 대해 **사용자의 커스텀 동작을 정의할 때 사용**할 수 있다. 프록시를 이용하게 되면 실제 객체에 접근할 수 없다. 따라서 프록시 패턴은 캡슐화, validation(접근권한) 을 구현할 때 큰 도움이 된다.

또한 프록시 객체를 통해 사용자의 요청을 캐싱하여 보다 빠른 응답을 받아낼 수 있기도 하고, 에러핸들링에 수월하기도 하다.



### 예시

```javascript
let BankAccounts = function() {
    //constructor
};

BankAccounts.prototype = {
    add(bankAccountData) {
        // funtionality for adding a new bank account
    },
    find(bankAccount) {
        // searching the list of bank accounts
    },
    getList() {
        // return a list of all the bank accounts
    }
};

// creating the proxy
var BankAccountsProxy = function() {
    // getting a reference to the original object
    this.bankAccounts = new BankAccounts();
};

BankAccountsProxy.prototype = {
    addBankAccount(bankAccountData) {
        // some funtionality before calling the add method on BankAccounts
        return this.bankAccounts.add();
    },
    findBankAccount(bankAccount) {
        // some funtionality before calling the find method on BankAccounts
        return this.carList.find();
    },
    getBankAccountsList() {
        // some funtionality before calling the getList method on BankAccounts
        return this.carList.getList();
    }
};

```



### Use case of Proxy

- [Basic example of using a Proxy](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#basic)         
- [Default values](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#default)
  - 객체의 속성에 대한 디폴트 값을 설장할 수 있다.
- [Hiding private properties](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#hiding)              
  - 특정 속성을 private하게 만들 수 있다. (접근하지 못하게)
- [A better enum](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#enum)                          
  - enum을 통해 특정 타입을 만들 때 효과적이다.
- [OnChange event for objects and arrays](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#onchange)
  - array의 length 가 대표적인 사례
- [Cache with property specific TTL](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#cache)
  - ​                  
- [Validation and revocable access](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#validation)        
  - 해당 객체에 대한 access 통제가 가능하다
- [Cookie object](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#cookie)                          
- [Python-like array slicing](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#python-slicing)      
- [Proxy as a proxy handler](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#proxy-handler)        
- [Performance measurements](http://dealwithjs.io/es6-features-10-use-cases-for-proxy/#performance)     