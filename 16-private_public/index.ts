class User {
    // anything that is not marked access modifier than TS auto mark it as public
    public email:string
    name:string

    // private makes city non accessible outside class
    private readonly city:string = "Mumbai" 
    // we can also make private variable using JS style
    #code:string = "33fa9f" 

    constructor(email:string, name:string){
        this.email = email
        this.name = name
    }
}


// another way to define class most used method
class Person{
    readonly id:number = 123
    constructor(
        public name:string, 
        public email:string
    ){
    }
}

const user = new User("a@n.com", "Aryan")
// user.city = "Ulwe"