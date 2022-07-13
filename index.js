// Code your solution here
const drivers = [ "Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"]
function findMatching(drivers, string){
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}


function fuzzyMatch(drivers, string){
let result = drivers.filter(driver => driver.startsWith(string))
return result;
}

function matchName(drivers, string){
    const result = drivers.filter(driver => driver.name === string)
    return result;
}