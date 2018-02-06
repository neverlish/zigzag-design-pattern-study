class Myself {
  private name = 'Jinho';
  
  private static _instance = new Myself();
  
  private static job = 'Programmer';
  
  private static location = 'office';

  private static age = 31;
  
  private constructor() {
    Myself._instance = this;
  }

  public static getInstance() {
    return this._instance;
  }

  public static getAge() {
    return this.age;
  }

  public static getOlder() {
    this.age++;
  }

  public static getJob() {
    return this.job;
  }

  public static retire() {
    this.job = 'BAEKSOO';
  }
}

console.log(Myself.getInstance())
console.log(Myself.getAge())
Myself.getOlder()
console.log(Myself.getAge())
Myself.retire()
console.log(Myself.getJob())
