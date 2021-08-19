export {}

type Mojiretsu = string;

const fooString: string = 'Hello'
const fooMojiretsu: Mojiretsu = 'Hello'

const example1 = {
  name: 'kdm',
  age: 43
}

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'kdm',
  age: 43
}

// ２つ目のalias
type Profile2 = typeof example1

