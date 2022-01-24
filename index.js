// Write your solution in this file!
const driver = {
}


function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
}


function deleteFromDriverByKey(obj, key) {
    let object = {...obj};
    delete object[key];
    return object; 
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj;
}

// // deleteFromDriverByKey(driver, "age")
// // console.log(driver);
// // destructivelyUpdateDriverWithKeyAndValue(driver, "peter", "muturi");

// let drivers = deleteFromDriverByKey(driver, "age");
// console.log(driver);