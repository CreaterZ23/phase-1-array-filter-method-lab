// Code your solution here
function findMatching(driverNamesArr, nameStr) {

    const matchingDriver = driverNamesArr.filter(names => names.toLowerCase() === nameStr.toLowerCase());
    console.log(matchingDriver);
    return matchingDriver;


}

function fuzzyMatch(driverNamesArr, nameStr) {
    const fuzzyMatchingDriver = driverNamesArr.filter(names => names.charAt() === nameStr.charAt());
    return fuzzyMatchingDriver;
}

function matchName(driverObjArr, driverStr) {
    const matchingDriver = driverObjArr.filter(driverObj => driverObj.name === driverStr)
    return matchingDriver;

}