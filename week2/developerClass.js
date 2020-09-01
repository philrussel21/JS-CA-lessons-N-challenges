class Developer {
  static count = 0;
  constructor(name, devType, languages) {
    this.name = name;
    this.languages = languages;
    this.devType = devType;
    Developer.count++
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`)
  }
  about() {
    console.log(`I am a ${this.devType} that specializes in ${this.languages}`)
  }
}




let devInstance = new Developer("Alex", "gamedev", ["C#", "JS"]);
devInstance.greet();
devInstance.about();
let devAnotherInstance = new Developer("Nands", "webDev", ["Ruby", "JS"]);
console.log(`There are currently ${Developer.count} developers!`);


