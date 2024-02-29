// generics is used when we don't know what type of argument we are accepting but we are returning that same type of argument

function indentityOne<Type>(val:Type):Type{
    return val
}

indentityOne(2)

// without generic we can use "any" type or can use unions "|" but they are not perfect and avoid use of "any" 


// our own type generic
interface Bottle{
    name:string,
    size:number
}

function buyBottle<Bottle>(bottle: Bottle){
    return 1
}

// another function taking array args
function indentityTwo<T>(products: T[]):T{
    return products[3];
}

// , "comma" here is just for saying that this is not a tag this is generic in TS also not a JSX 
// putting "," does not affect anything in code 
const indentityThree = <T,>(products: T[]):T => {
    return products[4]
}


// extra generics 

interface Database{
    connection: string,
    username:string,
    password: string
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object{
    return {valOne, valTwo}
}

anotherFunc(10, {connection:"hello", username:"aryan", password:"aryan"});

interface Course{
    name:string,
    author:string,
    subject:string
}

interface Quiz{
    name:string,
    type: string
}

class Sellable<T>{
    public cart : T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}

let q1: Quiz = {name:"CET", type: "mcq"}
let c1: Course = {name:"CET", author:"aryan", subject:"CET"}

const quiz = new Sellable()
quiz.addToCart(q1);
quiz.addToCart(c1);
