export {} 

// const echo = (arg: number): number => {
//   return arg
// }

// const echo = (arg: string): string => {
//   return arg
// }

const echo = <T>(arg: T): T => {
  return arg
}

type BooleanLike = boolean | "True" | "False"

console.log(echo<number>(100));
// console.log(echo<number>("string"));
console.log(echo<string>("ABC"));
console.log(echo<boolean>(false));
console.log(echo<BooleanLike>(false));
console.log(echo<BooleanLike>("True"));
console.log(echo<BooleanLike>("False"));

console.log(typeof echo("a"));
console.log(typeof echo(1));
console.log(typeof echo(true));


class Mirro {
  constructor(public value: number){}
  echo(): number {
    return this.value
  }
}

console.log(new Mirro(123).echo());

class MirroGene<T>{
  constructor(public value: T){}
  echo(): T {
    return this.value
  }
}

console.log(new MirroGene<number>(123).echo());
console.log(new MirroGene<string>("hello").echo());
console.log(new MirroGene<boolean>(false).echo());
