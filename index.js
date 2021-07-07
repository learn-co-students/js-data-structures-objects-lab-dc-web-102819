const driver = {
    name: "ryan"
}
// Write your solution in this file!


const updateDriverWithKeyAndValue = (driver, key, value) => 
    Object.assign({}, driver, {[key]: value})


const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) =>
    Object.assign(driver,{[key]: value})



const deleteFromDriverByKey = (driver, key,value) =>    {
   let save = Object.assign({}, driver, {[key]: value})
   delete save[key]
   return save

}
const destructivelyDeleteFromDriverByKey = (driver, key,value) => {
    let hold = Object.assign(driver, {[key]: value})
    delete hold[key]
    return hold
}



// `updateDriverWithKeyAndValue()`- this function should take in three arguments:
// a `driver` `Object`, a `key` and a `value`. This function should not mutate the
// `driver` and should return a _new_ `driver` that has an updated
// `value` for the `key` passed in.
// - `destructivelyUpdateDriverWithKeyAndValue()` - this function should work the
// same as `updateDriverWithKeyAndValue()` but it _should_ mutate the `driver`
// parameter passed in.
// - `deleteFromDriverByKey()` - this function should take in a `driver` `Object`
// and a `key`. It should delete the `key`/`value` pair for the `key` that was
// passed in from the `driver` `Object`. This should all not actually mutate the
// `driver` passed in.
// - `destructivelyDeleteFromDriverByKey()` - this function should work the same as
// `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in. Be
// sure and consider whether dot-notation or bracket-notation might affect your
// solution.
