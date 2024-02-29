let user = {
    name: "Aryan",
    email: "aryan@gmail.com",
    isActive: true
}


// passing object as argument in function
function createUser({name: string, isPaid: boolean}){}

createUser({name: "Aryan", isPaid: false})

// bad behaviour when we add new parameter that is not mentioned
// createUser({name: "Aryan", isPaid: false, email:"aryan@gmail.com"})

// to overcome this odd behavior we can define object separately and pass to func
let newUser = {name: "Aryan", isPaid: false, email:"aryan@gmail.com"}
createUser(newUser)
// further get to optional parameters

// function returning object
function createCourse():{name: string, price: number}{
    return {name:"typescript", price: 0}
}

// another way to return any number of paramater obj
function sendObj():{}{
    return {name:"Aryan", paid: false}
}


export {}