export {}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values)
  return values.reduce((e, a)=>e+a, 0)
}

console.log(sum(1, 2, 3, 4, 5))