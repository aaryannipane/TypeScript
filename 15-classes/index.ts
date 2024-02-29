class User {
    email:string
    name:string
    readonly city:string = "Mumbai" 
    constructor(email:string, name:string){
        this.email = email
        this.name = name
    }
}

const user = new User("a@n.com", "Aryan")
// user.city = "Ulwe"