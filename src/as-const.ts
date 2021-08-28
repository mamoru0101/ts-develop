export {} 

let name = 'kdm'

name = 'mmr'

let nickname = 'mmr' as const
// nickname = 'mamoru'  // <- だめ
nickname = 'mmr'


let profile = {
  name: 'kdm',
  height: 170
} as const

// as const でreadonlyになる
// profile.name = "mmr"
// profile.height = 180