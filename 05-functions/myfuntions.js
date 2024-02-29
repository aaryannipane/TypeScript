"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function greetName(username) {
    console.log("Hello ".concat(username, " welcome to typescript"));
}
addTwo(2);
greetName("Aryan");
var loginUser = function (username, password) {
    if (username != "aryan" || password != "nipane")
        return false;
    return true;
};
console.log(loginUser("root", "admin"));


