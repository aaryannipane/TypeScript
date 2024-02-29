// when we have more than one types for same variable we can use union "|"
// it is used to avoid "any" type 

let score: number | string = 33

score = 55
score = "45"


// user types
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let user: User | Admin = {name:"aryan", id:122}
user = {username:"AN", id:122}


// functions taking and returning multiple type values
function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toString()
    }   
}


// array containig mix type of value
let data: (number | string | boolean)[] = [1, "2", false]

// very strict variable
let PI: 3.14 = 3.14
// we can't assign another value to it other than 3.14

let seatAllotment: "aile" | "middile" | "window"

seatAllotment = "aile";

// we can't assign another value then mentioned
// seatAllotment = "crew" 
