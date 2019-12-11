// Write your solution in this file!

const driver = { name: "Nigel Manson"} ;  


//driver Object, a key and a value
function updateDriverWithKeyAndValue (obj , key , value) {
    const newObj = {...obj}
    newObj[key] = value ;
    return newObj
}


function destructivelyUpdateDriverWithKeyAndValue(obj , key , value) {
     obj[key] = value ; 
     return obj ; 
}



function deleteFromDriverByKey(obj,key,value) {

    const newObj = Object.assign({},obj) ;
    newObj;
    delete newObj[key] ;
    return newObj ; 

}


function destructivelyDeleteFromDriverByKey(obj,key,value) {
    delete obj[key] ; 
    return obj ;  
}






