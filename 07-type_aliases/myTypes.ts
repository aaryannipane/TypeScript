// we can create our own type or can rename any predifine type 
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return {name: "aryan", email: "a@n.com", isActive:true};
}

createUser({name: "aryan", email: "a@n.com", isActive:true})

// combinning types to another types
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

// combined two types to one 
type cardDetails = cardNumber & cardDate & {
    carddetails: string
}

export {}