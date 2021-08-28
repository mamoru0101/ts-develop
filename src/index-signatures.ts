export {} 

interface Profile {
  name: string;
  underTwenty: boolean;
  [indexName: string]: string|number|boolean;
}

// let profile: {name?: string} = {}
let profile: Profile = {name: "kdm", underTwenty: false}


// How to Write index signature
// { [indexName: typeForIndex ]: typeForValue}
// let profile: {[index: string]: string|number} = {}


profile.name = 'kdm'
profile.age = 20

