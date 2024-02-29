

function provideId(id: string | null){
    if(!id){
        console.log("please provide id");
        return 
    }

    return id.toLowerCase()
}


// the "in" operator in TS    

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin){
    // checking isAdmin property of Admin interface is present in account object ...
    if("isAdmin" in account){
        return account.isAdmin
    }
}

// instanceOf for narrowing
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else{
        console.log(x.toUpperCase());
        
    }
}


// Type predicates
type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet 
        console.log("Fish food");
    } else {
        pet 
        console.log("Bird food");
    }
}