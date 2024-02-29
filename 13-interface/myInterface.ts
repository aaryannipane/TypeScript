// interface is similar to type but there is difference in both
// we can say it is like class 
// we can also give types to methods in interface
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: ()=> string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

// reopening interface (adding new properties in existing interface)
interface User {
    githubToken: number
}

// we can do inheritance for interface (single, multiple, multilevel) all supported
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const aryan: Admin = {
    dbId:12, 
    email:"a@n.com", 
    userId:22,
    githubToken: 100,
    role: "admin",
    startTrial: ()=>{
        return "trial started"
    },
    getCoupon: (name: "ARYAN10", discount:10)=>{
        return 10;
    }
}