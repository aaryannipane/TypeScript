class User {

    private _courseCount = 1

    constructor(public email:string, public name:string){
    }

    private deleteToken(){
        console.log("Token deleted");
    }

    // getters
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount():number {
        return this._courseCount
    }

    // setters
    set courseCount(courseNum){
        if(courseNum<1){
            throw new Error("number should be greater than 1")
        }
        this._courseCount = courseNum
    }
}

const user = new User("a@n.com", "Aryan")
// user.city = "Ulwe"