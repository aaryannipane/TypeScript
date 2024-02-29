class User {

    // it is used only within the class only not outside or derived class
    private _courseCount = 1

    // protected is access only within class and derived class not outside that
    protected courseAccess: boolean = true

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

class SubUser extends User{
    changeCourseAccess(){
        // access to parents protected property
        this.courseAccess = false
    }
}

const user = new User("a@n.com", "Aryan")
// user.city = "Ulwe"