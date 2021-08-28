export {} 

class Animal {
  constructor(public name: string){}
  run(): string{
    return 'I can run'
  }
}


class Lion extends Animal {
  public speed: number
  constructor(name: string, speed: number){
    super(name)
    this.speed = speed
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h.`
  }
}


let animal = new Animal('Mickey')
console.log(animal);

let lion = new Lion('Simba', 80)
console.log(lion.run());
