// tuples are used for fixed order type for values in array
let tUser: [string, number, boolean]

tUser = ["AN", 42, true]

// wierd behavior
tUser.push("new element");
// no error :)