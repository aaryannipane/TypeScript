type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    // ? is use for optional paramater
    creditNumber?:number;
}

let u: User = {
    _id: "12345",
    name: "aryan",
    email: "a@a.com",
    isActive: true
}

// can't change _id property cause it is readonly
// u._id = "6789"

