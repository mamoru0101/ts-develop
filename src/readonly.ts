export {}

class VisaCard {
  constructor(public readonly owner: string){}
}

let myVisaCard = new VisaCard('kdm')
console.log(myVisaCard.owner)
// myVisaCard.owner = 'pkg'

