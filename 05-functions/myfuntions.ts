
function addTwo(num: number): number{
    return num + 2;
}

function greetName(username: string): void{
    console.log(`Hello ${username} welcome to typescript`);
}

addTwo(2);
greetName("Aryan");


let loginUser = (username: string, password: string): boolean=>{
    if(username != "aryan" || password != "nipane") return false;
    return true;
}
console.log(loginUser("root", "admin"));


let heros = ["thor", "hulk", "ironman"]

heros.map((hero): string =>{
    return `hero is ${hero}`;
})


let handleError = (errMsg: string): never => {
    throw Error(errMsg);
}


export {}