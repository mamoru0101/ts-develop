export {}

// class Person {
//   public name: string
//   protected age: number

//   constructor(name: string, age: number){
//     this.name = name
//     this.age = age
//   }
// }


class Person {
  constructor(public name: string, protected age: number){}
}

const me = new Person('kdm', 28)
console.log(me)