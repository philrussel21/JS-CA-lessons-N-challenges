
// function Person(name, city) {
//     this.name = name;
//     this.city = city;
//     Person.count = (Person.count || 0) + 1;
// }

// function Teacher(name, city, classesTeaching) {
//     Person.call(this, name, city);
//     this.classesTeaching = classesTeaching;
//     Teacher.count = (Teacher.count || 0) + 1;
// }

// function Student(name, city, classesStudying) {
//     Person.call(this, name, city);
//     this.classesStudying = classesStudying;
//     Student.count = (Student.count || 0) + 1;
// }

class Person {
  static count = 0
  constructor(name, city) {
    this.name = name;
    this.city = city;
    Person.count++
  }
}

class Teacher extends Person {
  static count = 0
  constructor(name, city, classesTeaching) {
    super(name, city)
    this.classesTeaching = classesTeaching
    Teacher.count++
  }
}

class Student extends Person {
  static count = 0
  constructor(name, city, classesStudying) {
    super(name, city)
    this.classesStudying = classesStudying
    Student.count++
  }
}

// p1 = new Person('dwight','scranton');
// t1 = new Teacher('lili','ny',['gmrc','pe'])
// s1 = new Student('barney','ny',['pe','driving'])

// console.log(p1,t1,s1)
// console.log(Person.count,Teacher.count,Student.count)
