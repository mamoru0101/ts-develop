export {}

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "mmr"
  static lastName: string = "kdm"

  static work(){
    return `${this.firstName} work`
  }
}

// let me = new Me()
// console.log(me.isProgrammer)
console.log(Me.isProgrammer);
console.log(Me.work());

