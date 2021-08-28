export {} 

let name:any = 'kdm'
// let length =name.length as  as number
let length =(name as string).length

// ↓　でもできるが、JSXと見間違えるのでasを使って行う。
// let length =(<string>name).length

console.log(length);

// length = 'foo'

// console.log(length)
