(function() {
  var _instance = null;

  this.Singleton = function(name) {
    if (_instance == null) {
      _instance = new Singleton(name);
    }
    return _instance;
  }

  var Singleton = function(name) {
    this.name = name;
  }  
})();

var singleton_1 = new Singleton('first')
var singleton_2 = new Singleton('second')

console.log(singleton_1, singleton_2)
