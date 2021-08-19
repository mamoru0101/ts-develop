export {}

const nextYearSalary = (currentSlary: number, rate: number = 1.1) => {
  return currentSlary * rate
}

console.log(nextYearSalary(1000, 1.05))
console.log(nextYearSalary(1000))