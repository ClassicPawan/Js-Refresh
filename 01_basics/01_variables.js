const accountId = 12343
let accountEmail ="pawan@mail.com"
var accountPassword = "12323"
accountCity = "mumbai"

let accountState;

// accountId = 23 // not allowed

accountEmail = "a@mail.com"
accountPassword = "324"
accountCity = "naviMumbai"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var 
because of issue in block scope and functional scope
*/